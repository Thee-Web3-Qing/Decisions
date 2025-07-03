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

const CHAPTER_SIZE = 5;

const splitParagraphs = (text) => {
  // Split into sentences
  const sentences = text.match(/[^.!?]+[.!?]+["']?|[^.!?]+$/g)?.map(s => s.trim()).filter(Boolean) || [];
  // Group every 3 sentences into a paragraph
  const paragraphs = [];
  for (let i = 0; i < sentences.length; i += 3) {
    paragraphs.push(sentences.slice(i, i + 3).join(' '));
  }
  return paragraphs;
};

const StoryPlay = (props) => {
  const params = useParams();
  const navigate = useNavigate();
  const storyId = props.storyId || parseInt(params.storyId);
  const { isConnected } = useAccount();
  const { connect } = useWeb3();

  const [currentStory, setCurrentStory] = useState(null);
  const [showAbout, setShowAbout] = useState(false);
  const [paragraphs, setParagraphs] = useState([]);
  const [currentParaIdx, setCurrentParaIdx] = useState(0);
  const [currentNode, setCurrentNode] = useState(null); // intro, decision, or ending node
  const [showConnect, setShowConnect] = useState(false);
  const [started, setStarted] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [ending, setEnding] = useState(null);

  useEffect(() => {
    const story = stories.find(s => s.id === storyId);
    if (!story) {
      navigate('/');
      return;
    }
    setCurrentStory(story);
    setCurrentNode({ ...story.intro, type: 'intro' });
    setShowConnect(!isConnected);
    setStarted(false);
    setEnding(null);
  }, [storyId, navigate, isConnected]);

  useEffect(() => {
    if (currentNode) {
      setParagraphs(splitParagraphs(currentNode.text));
      setCurrentParaIdx(0);
    }
  }, [currentNode]);

  const handleNext = () => {
    setCurrentParaIdx(idx => idx + 1);
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
              Play Story
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
        <Card sx={{ maxWidth: 600, width: '100%', borderRadius: 4, boxShadow: 12, p: 4, textAlign: 'center', bgcolor: 'background.paper' }}>
          <Typography variant="h4" fontWeight={800} color="success.main" gutterBottom>{ending.title || 'The End'}</Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="body1" color="text.primary" sx={{ mb: 3 }}>{ending.description}</Typography>
          {ending.image && <Box component="img" src={ending.image} alt={ending.title} sx={{ width: '100%', maxHeight: 300, objectFit: 'cover', borderRadius: 3, mb: 2 }} />}
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ borderRadius: 3, px: 6, py: 1.5, fontWeight: 700, fontSize: '1rem', boxShadow: 4, mt: 2 }}
            onClick={() => navigate('/')}
          >
            Back to Library
          </Button>
        </Card>
      </Box>
    );
  }

  // Main story play UI
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="80vh" py={6}>
      <Card sx={{ maxWidth: 600, width: '100%', borderRadius: 4, boxShadow: 12, p: 4, position: 'relative', textAlign: 'center', bgcolor: 'background.paper' }}>
        <Button
          sx={{ position: 'absolute', top: 16, left: 16, borderRadius: 2, fontWeight: 600 }}
          onClick={() => navigate('/')}
        >
          ← Back to Library
        </Button>
        <Button
          sx={{ position: 'absolute', top: 16, right: 16, borderRadius: 2, fontWeight: 600 }}
          onClick={() => setShowAbout(true)}
        >
          About
        </Button>
        <Typography variant="h5" fontWeight={700} color="primary" gutterBottom sx={{ mt: 2 }}>{currentStory.title}</Typography>
        <Divider sx={{ my: 2 }} />
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          {currentNode.type === 'intro' ? 'Intro' : currentNode.type === 'decision' ? 'Decision' : ''}
        </Typography>
        <CardContent>
          <Typography variant="body1" color="text.primary" sx={{ minHeight: 120, mb: 2 }}>
            {paragraphs[currentParaIdx]}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center', mt: 2, flexWrap: 'wrap' }}>
          {/* Show choices if at end of paragraphs and node has choices */}
          {currentParaIdx === paragraphs.length - 1 && currentNode.choices ? (
            currentNode.choices.map((choice) => (
              <Button
                key={choice.id}
                variant="contained"
                color="primary"
                sx={{
                  borderRadius: 3,
                  px: 4,
                  py: 1.5,
                  fontWeight: 700,
                  fontSize: '1rem',
                  boxShadow: 4,
                  mx: 1,
                  my: 1,
                  minWidth: 180,
                  transition: 'all 0.2s',
                  bgcolor: '#1e293b',
                  color: '#38bdf8',
                  '&:hover': {
                    bgcolor: '#38bdf8',
                    color: '#fff',
                  },
                }}
                onClick={() => handleChoice(choice)}
              >
                {choice.text}
              </Button>
            ))
          ) : currentParaIdx < paragraphs.length - 1 ? (
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ borderRadius: 3, px: 6, py: 1.5, fontWeight: 700, fontSize: '1rem', boxShadow: 4 }}
              onClick={handleNext}
            >
              Next
            </Button>
          ) : null}
        </CardActions>
      </Card>
      {/* About Drawer */}
      {showAbout && currentStory && (
        <AboutDrawer
          open={showAbout}
          onClose={() => setShowAbout(false)}
          story={currentStory}
        />
      )}
    </Box>
  );
};

export default StoryPlay;