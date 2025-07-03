import { useState, useEffect } from 'react';
import { useAccount } from 'wagmi';
import { stories } from '../data/stories';
import AboutDrawer from './AboutDrawer';
import { useParams, useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { useWeb3 } from './Web3Provider';
import Alert from '@mui/material/Alert';
import LinearProgress from '@mui/material/LinearProgress';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BookIcon from '@mui/icons-material/Book';

const StoryPlay = (props) => {
  const params = useParams();
  const navigate = useNavigate();
  const storyId = props.storyId || parseInt(params.storyId);
  const { isConnected } = useAccount();
  const { connect } = useWeb3();

  const [currentStory, setCurrentStory] = useState(null);
  const [showAbout, setShowAbout] = useState(false);
  const [currentParaIdx, setCurrentParaIdx] = useState(0);
  const [currentNode, setCurrentNode] = useState(null); // intro, decision, or ending node
  const [showConnect, setShowConnect] = useState(false);
  const [started, setStarted] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [ending, setEnding] = useState(null);
  const [showQuitDialog, setShowQuitDialog] = useState(false);
  const [storyProgress, setStoryProgress] = useState(null);

  useEffect(() => {
    const story = stories.find(s => s.id === storyId);
    if (!story) {
      navigate('/');
      return;
    }
    setCurrentStory(story);
    
    // Check for saved progress
    const savedProgress = localStorage.getItem(`storyProgress_${storyId}`);
    if (savedProgress) {
      try {
        const progress = JSON.parse(savedProgress);
        setStoryProgress(progress);
        setCurrentNode(progress.currentNode);
        setCurrentParaIdx(progress.currentParaIdx);
      } catch (error) {
        console.error('Error loading saved progress:', error);
        // Fallback to starting from beginning
        setCurrentNode({ ...story.intro, type: 'intro' });
        setCurrentParaIdx(0);
      }
    } else {
      setCurrentNode({ ...story.intro, type: 'intro' });
      setCurrentParaIdx(0);
    }
    
    setShowConnect(!isConnected);
    setStarted(false);
    setEnding(null);
  }, [storyId, navigate, isConnected]);

  useEffect(() => {
    if (currentNode) {
      setCurrentParaIdx(0);
    }
  }, [currentNode]);

  const handleNext = () => {
    setCurrentParaIdx(idx => idx + 1);
  };

  const handlePrevious = () => {
    setCurrentParaIdx(idx => Math.max(0, idx - 1));
  };

  // Calculate overall story progress
  const calculateOverallProgress = () => {
    if (!currentStory) return 0;
    
    // Count total nodes in the story
    const totalNodes = 1 + currentStory.decisions.length; // intro + decisions
    let completedNodes = 0;
    
    // Count completed nodes based on current position
    if (currentNode.type === 'intro') {
      // If we're in intro, count based on paragraph progress
      const introProgress = currentNode.paragraphs ? (currentParaIdx + 1) / currentNode.paragraphs.length : 0;
      completedNodes = introProgress;
    } else if (currentNode.type === 'decision') {
      // If we're in a decision, count intro as complete + decision progress
      completedNodes = 1; // intro is complete
      
      // Find current decision index
      const currentDecisionIndex = currentStory.decisions.findIndex(d => d.id === currentNode.id);
      if (currentDecisionIndex !== -1) {
        completedNodes += currentDecisionIndex; // previous decisions are complete
        // Add progress of current decision
        const decisionProgress = currentNode.paragraphs ? (currentParaIdx + 1) / currentNode.paragraphs.length : 0;
        completedNodes += decisionProgress;
      }
    }
    
    return Math.min(100, (completedNodes / totalNodes) * 100);
  };

  const handleChoice = (choice) => {
    setSelectedChoice(null);
    // Find next node: decision or ending
    if (choice.nextDecision) {
      // Find next decision node
      const nextNode = currentStory.decisions.find(d => d.id === choice.nextDecision);
      if (nextNode) {
        setCurrentNode({ ...nextNode, type: 'decision' });
        return;
      }
    }
    if (choice.ending) {
      // Find ending node
      const endingNode = currentStory.endings.find(e => e.id === choice.ending);
      if (endingNode) {
        setEnding(endingNode);
        return;
      }
    }
    // If no next node, just go back to library
    setEnding({ title: 'The End', description: 'Thanks for playing!' });
  };

  const handleQuitStory = () => {
    // Save current progress
    const progress = {
      storyId: currentStory.id,
      currentNode: currentNode,
      currentParaIdx: currentParaIdx,
      timestamp: new Date().toISOString(),
      overallProgress: calculateOverallProgress()
    };
    
    // Save to localStorage
    localStorage.setItem(`storyProgress_${currentStory.id}`, JSON.stringify(progress));
    setStoryProgress(progress);
    
    // Navigate back to library
    navigate('/');
  };

  const handleDiscardProgress = () => {
    // Remove saved progress
    localStorage.removeItem(`storyProgress_${currentStory.id}`);
    setStoryProgress(null);
    
    // Navigate back to library
    navigate('/');
  };

  const handleBackToLibrary = () => {
    // Only show dialog if story has progressed beyond intro
    if (currentNode.type === 'intro' && currentParaIdx === 0) {
      // If still at the very beginning, just go back
      navigate('/');
    } else {
      // Show quit confirmation dialog
      setShowQuitDialog(true);
    }
  };

  if (!currentStory) {
    return (
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="60vh">
        <Typography variant="h5" color="text.secondary" sx={{ opacity: 0.7 }}>Loading story...</Typography>
      </Box>
    );
  }

  // Show connect wallet or play story card before starting
  if (!started) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <Card sx={{ maxWidth: 400, width: '100%', p: 4, borderRadius: 4, boxShadow: 8, textAlign: 'center' }}>
          <Typography variant="h4" fontWeight={700} color="primary" gutterBottom>
            {currentStory.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            {currentStory.character}
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>{currentStory.description}</Typography>
          
          {/* Show saved progress indicator */}
          {storyProgress && (
            <Box sx={{ 
              background: 'rgba(76, 175, 80, 0.1)', 
              border: '1px solid rgba(76, 175, 80, 0.3)',
              borderRadius: 2, 
              p: 2, 
              mb: 3,
              textAlign: 'center'
            }}>
              <Typography variant="body2" color="success.main" fontWeight={600}>
                📖 Saved Progress Available
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Continue from {Math.round(storyProgress.overallProgress)}% complete
              </Typography>
            </Box>
          )}
          
          {!isConnected ? (
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ borderRadius: 3, px: 4, py: 1.5, fontWeight: 700, fontSize: '1rem', boxShadow: 4 }}
              onClick={connect}
            >
              Connect Wallet
            </Button>
          ) : (
            <Button
              variant="contained"
              color="success"
              size="large"
              sx={{ borderRadius: 3, px: 4, py: 1.5, fontWeight: 700, fontSize: '1rem', boxShadow: 4 }}
              onClick={() => setStarted(true)}
            >
              {storyProgress ? 'Continue Story' : 'Play Story'}
            </Button>
          )}
        </Card>
      </Box>
    );
  }

  // Show ending if reached
  if (ending) {
    return (
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="80vh" py={6}>
        <Card sx={{ 
          maxWidth: 700, 
          width: '100%', 
          borderRadius: 4, 
          boxShadow: 12, 
          p: 4, 
          textAlign: 'center', 
          bgcolor: 'background.paper',
          background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
        }}>
          <Box sx={{ 
            background: 'rgba(255,255,255,0.9)', 
            borderRadius: 3, 
            p: 4, 
            mb: 3,
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            border: '1px solid rgba(255,255,255,0.3)'
          }}>
            <Typography variant="h4" fontWeight={800} color="success.main" gutterBottom sx={{ mb: 3 }}>
              {ending.title || 'The End'}
            </Typography>
            <Divider sx={{ my: 3 }} />
            {ending.paragraphs ? (
              ending.paragraphs.map((paragraph, index) => (
                <Typography 
                  key={paragraph.id}
                  variant="body1" 
                  color="text.primary" 
                  sx={{ 
                    mb: 2,
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    fontWeight: 400,
                    textAlign: 'left',
                    fontFamily: '"Georgia", serif'
                  }}
                >
                  {paragraph.text}
                </Typography>
              ))
            ) : (
              <Typography variant="body1" color="text.primary" sx={{ mb: 3 }}>
                {ending.description || 'Thanks for playing!'}
              </Typography>
            )}
            {ending.image && (
              <Box 
                component="img" 
                src={ending.image} 
                alt={ending.title} 
                sx={{ 
                  width: '100%', 
                  maxHeight: 300, 
                  objectFit: 'cover', 
                  borderRadius: 3, 
                  mb: 2,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                }} 
              />
            )}
          </Box>
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<ArrowBackIcon />}
            sx={{ 
              borderRadius: 3, 
              px: 6, 
              py: 1.5, 
              fontWeight: 700, 
              fontSize: '1rem', 
              boxShadow: 4,
              background: 'linear-gradient(45deg, #667eea 30%, #764ba2 90%)',
              '&:hover': {
                background: 'linear-gradient(45deg, #5a6fd8 30%, #6a4190 90%)',
                boxShadow: 6
              }
            }}
            onClick={() => navigate('/')}
          >
            Back to Library
          </Button>
        </Card>
      </Box>
    );
  }

  // Get current paragraph from the new structure
  const currentParagraph = currentNode.paragraphs ? currentNode.paragraphs[currentParaIdx] : null;
  const totalParagraphs = currentNode.paragraphs ? currentNode.paragraphs.length : 0;
  const chapterProgress = totalParagraphs > 0 ? ((currentParaIdx + 1) / totalParagraphs) * 100 : 0;
  const overallProgress = calculateOverallProgress();

  // Main story play UI
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="80vh" py={6}>
      <Card sx={{ 
        maxWidth: 700, 
        width: '100%', 
        borderRadius: 4, 
        boxShadow: 12, 
        p: 4, 
        position: 'relative', 
        textAlign: 'center', 
        bgcolor: 'background.paper',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
      }}>
        {/* Header Navigation */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Button
            startIcon={<ArrowBackIcon />}
            sx={{ borderRadius: 2, fontWeight: 600 }}
            onClick={handleBackToLibrary}
          >
            Library
          </Button>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <BookIcon color="primary" />
            <Typography variant="h6" fontWeight={700} color="primary">
              {currentStory.title}
            </Typography>
          </Box>
          <Button
            sx={{ borderRadius: 2, fontWeight: 600 }}
            onClick={() => setShowAbout(true)}
          >
            About
          </Button>
        </Box>

        {/* Progress Bar */}
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
            <Typography variant="caption" color="text.secondary">
              {currentNode.type === 'intro' ? 'Introduction' : 'Chapter'} {currentParaIdx + 1} of {totalParagraphs}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {Math.round(overallProgress)}% Story Complete
            </Typography>
          </Box>
          <LinearProgress 
            variant="determinate" 
            value={overallProgress} 
            sx={{ 
              height: 8, 
              borderRadius: 4,
              backgroundColor: 'rgba(0,0,0,0.1)',
              '& .MuiLinearProgress-bar': {
                borderRadius: 4,
                background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)'
              }
            }} 
          />
        </Box>

        {/* Story Content */}
        <CardContent sx={{ px: 0, py: 2 }}>
          <Box sx={{ 
            background: 'rgba(255,255,255,0.9)', 
            borderRadius: 3, 
            p: 4, 
            mb: 3,
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            border: '1px solid rgba(255,255,255,0.3)'
          }}>
            <Typography 
              variant="body1" 
              color="text.primary" 
              sx={{ 
                fontSize: '1.1rem',
                lineHeight: 1.8,
                fontWeight: 400,
                textAlign: 'left',
                minHeight: 120,
                fontFamily: '"Georgia", serif',
                '&::first-letter': {
                  fontSize: '3rem',
                  fontWeight: 'bold',
                  color: 'primary.main',
                  float: 'left',
                  lineHeight: 1,
                  marginRight: '0.5rem',
                  marginTop: '0.2rem'
                }
              }}
            >
              {currentParagraph ? currentParagraph.text : 'Loading...'}
            </Typography>
          </Box>
        </CardContent>

        {/* Navigation Buttons */}
        <CardActions sx={{ justifyContent: 'center', mt: 2, flexWrap: 'wrap', gap: 2 }}>
          {/* Previous Button */}
          {currentParaIdx > 0 && (
            <Button
              variant="outlined"
              color="primary"
              size="large"
              startIcon={<ArrowBackIcon />}
              sx={{ 
                borderRadius: 3, 
                px: 4, 
                py: 1.5, 
                fontWeight: 600, 
                fontSize: '1rem',
                borderWidth: 2,
                '&:hover': {
                  borderWidth: 2
                }
              }}
              onClick={handlePrevious}
            >
              Previous
            </Button>
          )}
          
          {/* Next Button */}
          {currentParaIdx < totalParagraphs - 1 && (
            <Button
              variant="contained"
              color="primary"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{ 
                borderRadius: 3, 
                px: 6, 
                py: 1.5, 
                fontWeight: 700, 
                fontSize: '1rem', 
                boxShadow: 4,
                background: 'linear-gradient(45deg, #667eea 30%, #764ba2 90%)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #5a6fd8 30%, #6a4190 90%)',
                  boxShadow: 6
                }
              }}
              onClick={handleNext}
            >
              Next
            </Button>
          )}
          
          {/* Choices */}
          {currentParaIdx === totalParagraphs - 1 && currentNode.choices ? (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%', mt: 2 }}>
              <Typography variant="h6" fontWeight={600} color="primary" gutterBottom>
                What will you do?
              </Typography>
              {currentNode.choices.map((choice) => (
                <Button
                  key={choice.id}
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{ 
                    borderRadius: 3, 
                    px: 4, 
                    py: 2, 
                    fontWeight: 600, 
                    fontSize: '1rem', 
                    boxShadow: 4,
                    background: 'linear-gradient(45deg, #667eea 30%, #764ba2 90%)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #5a6fd8 30%, #6a4190 90%)',
                      boxShadow: 6,
                      transform: 'translateY(-2px)'
                    },
                    transition: 'all 0.3s ease',
                    minWidth: 250
                  }}
                  onClick={() => handleChoice(choice)}
                  disabled={selectedChoice === choice.id}
                >
                  {choice.text}
                </Button>
              ))}
            </Box>
          ) : null}
        </CardActions>
      </Card>
      
      {/* Quit Confirmation Dialog */}
      <Dialog 
        open={showQuitDialog} 
        onClose={() => setShowQuitDialog(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle sx={{ 
          textAlign: 'center', 
          fontWeight: 700,
          color: 'primary.main'
        }}>
          Save Your Progress?
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1" sx={{ mb: 2, textAlign: 'center' }}>
            You're {Math.round(calculateOverallProgress())}% through the story. Would you like to save your progress so you can continue later?
          </Typography>
          <Box sx={{ 
            background: 'rgba(0,0,0,0.05)', 
            borderRadius: 2, 
            p: 2, 
            mb: 2,
            textAlign: 'center'
          }}>
            <Typography variant="caption" color="text.secondary">
              Current Position: {currentNode.type === 'intro' ? 'Introduction' : 'Chapter'} {currentParaIdx + 1} of {totalParagraphs}
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center', gap: 2, pb: 3 }}>
          <Button
            variant="outlined"
            color="error"
            onClick={handleDiscardProgress}
            sx={{ 
              borderRadius: 2, 
              px: 3,
              fontWeight: 600
            }}
          >
            Discard Progress
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleQuitStory}
            sx={{ 
              borderRadius: 2, 
              px: 3,
              fontWeight: 600,
              background: 'linear-gradient(45deg, #667eea 30%, #764ba2 90%)',
              '&:hover': {
                background: 'linear-gradient(45deg, #5a6fd8 30%, #6a4190 90%)'
              }
            }}
          >
            Save & Quit
          </Button>
        </DialogActions>
      </Dialog>
      
      <AboutDrawer open={showAbout} onClose={() => setShowAbout(false)} />
    </Box>
  );
};

export default StoryPlay;