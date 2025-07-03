import { useState } from 'react';
import { Drawer, Box, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const StoryDetailsDrawer = ({ open, onClose, data }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      sx={{
        width: { xs: '100%', sm: 400 },
        '& .MuiDrawer-paper': {
          width: { xs: '100%', sm: 400 },
          boxSizing: 'border-box',
          bgcolor: 'background.default',
        },
      }}
      ModalProps={{ keepMounted: true }}
    >
      <Box sx={{ p: { xs: 2, md: 3 }, height: '100%', display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: 600, fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
            {data?.title || 'Story Details'}
          </Typography>
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Content Area */}
        <Box sx={{ flex: 1, overflowY: 'auto' }}>
          {/* Example: Book cover */}
          {data?.coverImage && (
            <Box
              component="img"
              src={data.coverImage}
              alt={data.title}
              sx={{
                width: '100%',
                height: 180,
                objectFit: 'cover',
                borderRadius: 2,
                mb: 2,
              }}
            />
          )}

          {/* Example: Story details */}
          <Typography variant="body1" sx={{ mb: 2 }}>
            {data?.description}
          </Typography>
        </Box>
      </Box>
    </Drawer>
  );
};

export default StoryDetailsDrawer;
