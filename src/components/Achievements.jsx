import React from 'react';
import { stories } from '../data/stories';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ExploreIcon from '@mui/icons-material/Explore';
import { getStoryProgress, calculateStoryProgress } from '../utils/progressUtils';

const getAchievements = () => {
  // Unique stories completed
  let storiesCompleted = 0;
  let endingsFound = 0;
  stories.forEach(story => {
    const progress = getStoryProgress(story.id);
    const percent = Math.round(calculateStoryProgress(story, progress));
    if (progress && percent >= 100) storiesCompleted++;
    if (progress && progress.endingsFound) endingsFound += progress.endingsFound.length;
    // Fallback: if endingsFound not tracked, count as 1 if completed
    else if (progress && percent >= 100) endingsFound++;
  });
  return { storiesCompleted, endingsFound };
};

const Achievements = () => {
  const { storiesCompleted, endingsFound } = getAchievements();

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #2563eb 100%)', py: 6, px: 2 }}>
      <Typography variant="h3" align="center" fontWeight={800} color="#60a5fa" gutterBottom sx={{ mb: 6, letterSpacing: 1 }}>
        Achievements
      </Typography>
      <Grid container spacing={4} justifyContent="center" maxWidth="md" sx={{ mx: 'auto' }}>
        <Grid item xs={12} sm={6}>
          <Card elevation={8} sx={{ borderRadius: 4, border: '2px solid #22d3ee', bgcolor: 'background.paper', p: 2 }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <CheckCircleIcon sx={{ fontSize: 48, color: '#22c55e', mb: 1 }} />
              <Typography variant="h5" fontWeight={700} color="text.primary" gutterBottom>
                Stories Completed
              </Typography>
              <Chip label={storiesCompleted} color="success" size="medium" sx={{ fontSize: '1.2rem', fontWeight: 700, px: 2, my: 2 }} />
              <Typography variant="body2" color="text.secondary">
                Number of unique stories you have completed by reaching any ending.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card elevation={8} sx={{ borderRadius: 4, border: '2px solid #fbbf24', bgcolor: 'background.paper', p: 2 }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <EmojiEventsIcon sx={{ fontSize: 48, color: '#fbbf24', mb: 1 }} />
              <Typography variant="h5" fontWeight={700} color="text.primary" gutterBottom>
                Endings Found
              </Typography>
              <Chip label={endingsFound} color="warning" size="medium" sx={{ fontSize: '1.2rem', fontWeight: 700, px: 2, my: 2 }} />
              <Typography variant="body2" color="text.secondary">
                Total endings you have discovered, even if from replaying the same story.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <ExploreIcon sx={{ fontSize: 40, color: '#38bdf8', mb: 1 }} />
        <Typography variant="h6" color="text.secondary">
          Keep exploring stories and finding new endings to unlock more achievements!
        </Typography>
      </Box>
    </Box>
  );
};

export default Achievements; 