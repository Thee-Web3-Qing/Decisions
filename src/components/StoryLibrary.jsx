import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { stories } from '../data/stories';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import LinearProgress from '@mui/material/LinearProgress';
import { getStoryProgress, calculateStoryProgress } from '../utils/progressUtils';

const StoryLibrary = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedStory, setSelectedStory] = useState(null);
  const navigate = useNavigate();

  const handleViewStory = (story) => {
    setSelectedStory(story);
    setShowDetails(true);
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #2563eb 100%)', py: 6, px: 2 }}>
      <Typography variant="h3" align="center" fontWeight={800} color="#60a5fa" gutterBottom sx={{ mb: 6, letterSpacing: 1 }}>
        Story Library
      </Typography>
      
      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center" maxWidth="lg" sx={{ mx: 'auto', width: '100%' }}>
        {stories.map((story) => {
          const progress = getStoryProgress(story.id);
          const percent = Math.round(calculateStoryProgress(story, progress));
          const hasProgress = progress && percent > 0;
          
          return (
            <Grid item xs={12} sm={6} md={4} key={story.id} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Card
                elevation={8}
                sx={{
                  borderRadius: 4,
                  border: '2px solid #22d3ee',
                  bgcolor: 'background.paper',
                  minWidth: { xs: '90vw', sm: 320 },
                  maxWidth: 340,
                  minHeight: 500,
                  maxHeight: 600,
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'scale(1.04)',
                    boxShadow: 12,
                  },
                }}
              >
                <CardContent sx={{
                  width: '100%',
                  textAlign: 'center',
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: story.description.length < 60 ? 'center' : 'flex-start',
                  p: { xs: 1, sm: 2 },
                  minHeight: 300,
                  overflow: 'hidden',
                  position: 'relative',
                }}>
                  {story.coverImage ? (
                    <Box
                      component="img"
                      src={story.coverImage}
                      alt={story.title}
                      sx={{ width: { xs: '100%', sm: 180 }, height: { xs: 120, sm: 120 }, objectFit: 'cover', borderRadius: 2, boxShadow: 2, mb: 2, border: '1px solid #bae6fd', mx: 'auto', display: 'block', maxWidth: 220 }}
                    />
                  ) : (
                    <Box sx={{ fontSize: 56, color: '#38bdf8', mb: 2 }}>{story.id === 1 ? '📖' : '🚧'}</Box>
                  )}
                  <Typography variant="h5" fontWeight={700} color="text.primary" gutterBottom sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem' } }}>
                    {story.title}
                  </Typography>
                  <Typography variant="subtitle1" color="#06b6d4" gutterBottom sx={{ fontSize: { xs: '1rem', sm: '1.1rem' } }}>
                    {story.character}
                  </Typography>
                  <Divider sx={{ my: 1 }} />
                  <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                    <Chip label={story.difficulty} color="primary" size="small" sx={{ bgcolor: '#1e40af', color: '#bae6fd', fontWeight: 600, fontSize: { xs: '0.85em', sm: '1em' } }} />
                    <Chip label={story.estimatedTime} color="secondary" size="small" sx={{ bgcolor: '#334155', color: '#bae6fd', fontWeight: 600, fontSize: { xs: '0.85em', sm: '1em' } }} />
                  </Box>
                  
                  {/* Progress Bar */}
                  {hasProgress && (
                    <Box sx={{ mb: 2 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                        <Typography variant="caption" color="text.secondary" sx={{ fontSize: { xs: '0.7rem', sm: '0.75rem' } }}>
                          Progress
                        </Typography>
                        <Typography variant="caption" color="text.secondary" sx={{ fontSize: { xs: '0.7rem', sm: '0.75rem' }, fontWeight: 600 }}>
                          {percent}%
                        </Typography>
                      </Box>
                      <LinearProgress 
                        variant="determinate" 
                        value={percent} 
                        sx={{ 
                          height: 6, 
                          borderRadius: 3,
                          bgcolor: 'rgba(34, 211, 238, 0.2)',
                          '& .MuiLinearProgress-bar': {
                            bgcolor: percent === 100 ? '#22c55e' : '#22d3ee',
                            borderRadius: 3,
                          }
                        }} 
                      />
                    </Box>
                  )}
                  
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      mb: 2,
                      width: '100%',
                      display: '-webkit-box',
                      WebkitLineClamp: 5,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      minHeight: '6em',
                      maxHeight: '6em',
                      lineHeight: 1.2,
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: { xs: '0.95em', sm: '1em' }
                    }}
                  >
                    {story.description.length > 300
                      ? (
                        <>
                          {story.description.slice(0, 300)}...{' '}
                          <Button size="small" sx={{ p: 0, minWidth: 0, fontSize: '0.95em', textTransform: 'none' }} onClick={() => handleViewStory(story)}>
                            Read more
                          </Button>
                        </>
                      )
                      : story.description
                    }
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      borderRadius: 3,
                      px: 4,
                      py: 1.5,
                      fontWeight: 700,
                      fontSize: { xs: '0.95rem', sm: '1rem' },
                      background: hasProgress ? 'linear-gradient(90deg, #10b981 0%, #2563eb 100%)' : 'linear-gradient(90deg, #2563eb 0%, #10b981 100%)',
                      color: '#fff',
                      boxShadow: 4,
                      '&:hover': {
                        background: 'linear-gradient(90deg, #10b981 0%, #2563eb 100%)',
                        color: '#fff',
                      },
                    }}
                    onClick={() => handleViewStory(story)}
                  >
                    {hasProgress ? 'Continue Story' : 'View Story'}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      {/* Story Details Modal */}
      {showDetails && selectedStory && (
        <Box position="fixed" top={0} left={0} width="100%" height="100vh" zIndex={1300} display="flex" alignItems="center" justifyContent="center" bgcolor="rgba(0,0,0,0.7)">
          <Card sx={{ maxWidth: 420, width: '100%', borderRadius: 4, border: '2px solid #22d3ee', boxShadow: 12, p: 4, position: 'relative', textAlign: 'center' }}>
            <Button
              onClick={() => setShowDetails(false)}
              sx={{ position: 'absolute', top: 12, right: 12, minWidth: 0, p: 1, color: '#06b6d4', fontSize: 28 }}
            >
              ×
            </Button>
            <Box sx={{ fontSize: 56, color: '#38bdf8', mb: 2 }}>📖</Box>
            <Typography variant="h5" fontWeight={700} color="text.primary" gutterBottom>
              {selectedStory.title}
            </Typography>
            <Typography variant="subtitle1" color="#06b6d4" gutterBottom>
              {selectedStory.character}
            </Typography>
            <Divider sx={{ my: 1 }} />
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mb: 2 }}>
              <Chip label={selectedStory.difficulty} color="primary" size="small" sx={{ bgcolor: '#1e40af', color: '#bae6fd', fontWeight: 600 }} />
              <Chip label={selectedStory.estimatedTime} color="secondary" size="small" sx={{ bgcolor: '#334155', color: '#bae6fd', fontWeight: 600 }} />
            </Box>
            
            {/* Progress in Modal */}
            {(() => {
              const progress = getStoryProgress(selectedStory.id);
              const percent = Math.round(calculateStoryProgress(selectedStory, progress));
              const hasProgress = progress && percent > 0;
              
              return hasProgress ? (
                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                    <Typography variant="body2" color="text.secondary">
                      Your Progress
                    </Typography>
                    <Typography variant="body2" color="text.secondary" fontWeight={600}>
                      {percent}%
                    </Typography>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={percent} 
                    sx={{ 
                      height: 8, 
                      borderRadius: 4,
                      bgcolor: 'rgba(34, 211, 238, 0.2)',
                      '& .MuiLinearProgress-bar': {
                        bgcolor: percent === 100 ? '#22c55e' : '#22d3ee',
                        borderRadius: 4,
                      }
                    }} 
                  />
                </Box>
              ) : null;
            })()}
            
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              {selectedStory.description}
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                borderRadius: 3,
                px: 4,
                py: 1.5,
                fontWeight: 700,
                fontSize: '1rem',
                background: 'linear-gradient(90deg, #2563eb 0%, #10b981 100%)',
                color: '#fff',
                boxShadow: 4,
                mt: 2,
                '&:hover': {
                  background: 'linear-gradient(90deg, #10b981 0%, #2563eb 100%)',
                  color: '#fff',
                },
              }}
              onClick={() => { setShowDetails(false); navigate(`/story/${selectedStory.id}`); }}
            >
              {(() => {
                const progress = getStoryProgress(selectedStory.id);
                const percent = Math.round(calculateStoryProgress(selectedStory, progress));
                return progress && percent > 0 ? 'Continue Story' : 'Play Story';
              })()}
            </Button>
          </Card>
        </Box>
      )}
    </Box>
  );
};

export default StoryLibrary; 