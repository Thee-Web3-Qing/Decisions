import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { usePaymaster } from '../hooks/usePaymaster';
import PaymasterTransactionButton from './PaymasterTransactionButton';
import { stories } from '../data/stories';

const StoryPlay = () => {
  const { storyId } = useParams();
  const navigate = useNavigate();
  const { isPaymasterAvailable } = usePaymaster();
  
  const [currentStory, setCurrentStory] = useState(null);
  const [currentDecision, setCurrentDecision] = useState(null);
  const [userChoices, setUserChoices] = useState([]);
  const [storyProgress, setStoryProgress] = useState(0);
  const [showEnding, setShowEnding] = useState(false);

  useEffect(() => {
    const story = stories.find(s => s.id === parseInt(storyId));
    if (story) {
      setCurrentStory(story);
      setCurrentDecision(story.intro);
    } else {
      navigate('/');
    }
  }, [storyId, navigate]);

  const handleChoice = async (choiceId) => {
    if (!currentStory || !currentDecision) return;

    const choice = currentDecision.choices.find(c => c.id === choiceId);
    if (!choice) return;

    // Record choice with Paymaster
    try {
      // Add choice to local state
      const newChoices = [...userChoices, {
        decisionId: currentDecision.id,
        choiceId: choiceId,
        timestamp: Date.now()
      }];
      setUserChoices(newChoices);

      // Update progress
      const newProgress = Math.min(100, (newChoices.length / currentStory.totalDecisions) * 100);
      setStoryProgress(newProgress);

      // Check if this leads to an ending
      if (choice.ending) {
        setShowEnding(true);
        return;
      }

      // Move to next decision
      const nextDecision = currentStory.decisions.find(d => d.id === choice.nextDecision);
      if (nextDecision) {
        setCurrentDecision(nextDecision);
      } else {
        // Story completed without specific ending
        setShowEnding(true);
      }
    } catch (error) {
      console.error('Error recording choice:', error);
      // Revert choice if Paymaster fails
      setUserChoices(prev => prev.slice(0, -1));
    }
  };

  const handleMintEnding = async () => {
    if (!currentStory || !showEnding) return;

    try {
      // Find the ending based on user choices
      const ending = currentStory.endings.find(e => 
        e.requirements.every(req => 
          userChoices.some(choice => 
            choice.decisionId === req.decisionId && choice.choiceId === req.choiceId
          )
        )
      ) || currentStory.endings[0]; // Default ending

      // Mint NFT with Paymaster
      const metadata = {
        name: `${currentStory.title} - ${ending.title}`,
        description: ending.description,
        image: ending.image,
        attributes: [
          { trait_type: "Story", value: currentStory.title },
          { trait_type: "Ending", value: ending.title },
          { trait_type: "Choices Made", value: userChoices.length },
          { trait_type: "Completion Date", value: new Date().toISOString() }
        ]
      };

      // This will be handled by the PaymasterTransactionButton
      return { ending, metadata };
    } catch (error) {
      console.error('Error minting ending:', error);
      throw error;
    }
  };

  if (!currentStory || !currentDecision) {
    return (
      <div className="container" style={{ padding: '2rem', textAlign: 'center' }}>
        <div className="glass" style={{ padding: '2rem' }}>
          <div className="loading">Loading story...</div>
        </div>
      </div>
    );
  }

  if (showEnding) {
    const ending = currentStory.endings.find(e => 
      e.requirements.every(req => 
        userChoices.some(choice => 
          choice.decisionId === req.decisionId && choice.choiceId === req.choiceId
        )
      )
    ) || currentStory.endings[0];

    return (
      <div className="container" style={{ padding: '2rem' }}>
        <div className="glass" style={{ padding: '2rem', textAlign: 'center' }}>
          <h2 style={{ 
            fontSize: '2rem', 
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            {ending.title}
          </h2>
          
          <div style={{ 
            marginBottom: '2rem',
            fontSize: '1.1rem',
            lineHeight: '1.6',
            color: '#e2e8f0'
          }}>
            {ending.description}
          </div>

          {ending.image && (
            <div style={{ marginBottom: '2rem' }}>
              <img 
                src={ending.image} 
                alt={ending.title}
                style={{ 
                  maxWidth: '100%', 
                  height: 'auto',
                  borderRadius: '0.5rem',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.3)'
                }}
              />
            </div>
          )}

          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ marginBottom: '1rem', color: '#94a3b8' }}>Your Journey</h3>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
              marginBottom: '1rem'
            }}>
              {userChoices.map((choice, index) => (
                <div key={index} className="glass" style={{ 
                  padding: '1rem',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}>
                  <div style={{ fontSize: '0.875rem', color: '#94a3b8' }}>
                    Decision {index + 1}
                  </div>
                  <div style={{ fontSize: '1rem', color: '#e2e8f0' }}>
                    {choice.choiceId}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <PaymasterTransactionButton
              type="mintEnding"
              storyId={currentStory.id}
              endingId={ending.id}
              metadata={{
                name: `${currentStory.title} - ${ending.title}`,
                description: ending.description,
                image: ending.image,
                attributes: [
                  { trait_type: "Story", value: currentStory.title },
                  { trait_type: "Ending", value: ending.title },
                  { trait_type: "Choices Made", value: userChoices.length },
                  { trait_type: "Completion Date", value: new Date().toISOString() }
                ]
              }}
              onSuccess={() => {
                alert('🎉 NFT minted successfully! Check your wallet.');
              }}
              onError={(error) => {
                alert(`Error minting NFT: ${error.message}`);
              }}
            >
              🎨 Mint Ending NFT
            </PaymasterTransactionButton>

            <button 
              onClick={() => navigate('/')}
              className="btn btn-secondary"
            >
              📚 Back to Stories
            </button>

            <button 
              onClick={() => {
                setShowEnding(false);
                setUserChoices([]);
                setStoryProgress(0);
                setCurrentDecision(currentStory.intro);
              }}
              className="btn btn-secondary"
            >
              🔄 Play Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: '2rem' }}>
      <div className="glass" style={{ padding: '2rem' }}>
        {/* Progress Bar */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            marginBottom: '0.5rem',
            fontSize: '0.875rem',
            color: '#94a3b8'
          }}>
            <span>Progress</span>
            <span>{Math.round(storyProgress)}%</span>
          </div>
          <div style={{ 
            width: '100%', 
            height: '8px', 
            backgroundColor: 'rgba(255,255,255,0.1)',
            borderRadius: '4px',
            overflow: 'hidden'
          }}>
            <div style={{ 
              width: `${storyProgress}%`, 
              height: '100%',
              background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
              transition: 'width 0.3s ease'
            }}></div>
          </div>
        </div>

        {/* Story Content */}
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ 
            fontSize: '1.5rem', 
            marginBottom: '1rem',
            color: '#f1f5f9'
          }}>
            {currentDecision.title}
          </h2>
          
          <div style={{ 
            fontSize: '1.1rem',
            lineHeight: '1.6',
            color: '#e2e8f0',
            marginBottom: '2rem'
          }}>
            {currentDecision.content}
          </div>
        </div>

        {/* Choices */}
        <div style={{ 
          display: 'grid', 
          gap: '1rem',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))'
        }}>
          {currentDecision.choices.map((choice) => (
            <PaymasterTransactionButton
              key={choice.id}
              type="recordChoice"
              storyId={currentStory.id}
              decisionId={currentDecision.id}
              choiceId={choice.id}
              onSuccess={() => handleChoice(choice.id)}
              onError={(error) => {
                alert(`Error recording choice: ${error.message}`);
              }}
              className="btn btn-primary"
              style={{ 
                padding: '1rem',
                textAlign: 'left',
                justifyContent: 'flex-start',
                height: 'auto',
                minHeight: '60px'
              }}
            >
              <div style={{ fontSize: '1rem', fontWeight: '500' }}>
                {choice.text}
              </div>
              {choice.description && (
                <div style={{ 
                  fontSize: '0.875rem', 
                  color: '#94a3b8',
                  marginTop: '0.25rem'
                }}>
                  {choice.description}
                </div>
              )}
            </PaymasterTransactionButton>
          ))}
        </div>

        {/* Paymaster Status */}
        {!isPaymasterAvailable && (
          <div style={{ 
            marginTop: '2rem',
            padding: '1rem',
            borderRadius: '0.5rem',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            backgroundColor: 'rgba(239, 68, 68, 0.1)',
            textAlign: 'center'
          }}>
            <div style={{ color: '#fca5a5', marginBottom: '0.5rem' }}>
              ⚠️ Gasless Transactions Not Available
            </div>
            <div style={{ fontSize: '0.875rem', color: '#94a3b8' }}>
              Please use Coinbase Smart Wallet for the best experience
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StoryPlay; 