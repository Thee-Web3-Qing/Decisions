import React from 'react';
import { Box, Typography, Button, Card } from '@mui/material';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" p={3}>
          <Card sx={{ maxWidth: 500, width: '100%', p: 4, borderRadius: 4, boxShadow: 8, textAlign: 'center' }}>
            <Typography variant="h4" fontWeight={700} color="error.main" gutterBottom>
              Oops! Something went wrong
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              We encountered an unexpected error. Please try refreshing the page or going back to the library.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => window.location.reload()}
                sx={{ borderRadius: 2, px: 3, fontWeight: 600 }}
              >
                Refresh Page
              </Button>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => window.location.href = '/'}
                sx={{ borderRadius: 2, px: 3, fontWeight: 600 }}
              >
                Go to Library
              </Button>
            </Box>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <Box sx={{ mt: 3, p: 2, bgcolor: 'rgba(0,0,0,0.05)', borderRadius: 2, textAlign: 'left' }}>
                <Typography variant="caption" color="text.secondary">
                  <strong>Error:</strong> {this.state.error.toString()}
                </Typography>
              </Box>
            )}
          </Card>
        </Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 