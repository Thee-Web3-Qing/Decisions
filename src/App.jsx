import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { config } from './config/wagmi';
import Layout from './components/Layout';
import StoryLibrary from './components/StoryLibrary';
import Profile from './components/Profile';
import StoryPlay from './components/StoryPlay';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';
import { useState, useEffect } from 'react';

// Create a client
const queryClient = new QueryClient();

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedStoryId, setSelectedStoryId] = useState(null);

  // Extract story ID from URL if present
  useEffect(() => {
    const storyMatch = location.pathname.match(/\/story\/(\d+)/);
    if (storyMatch) {
      const storyId = parseInt(storyMatch[1]);
      setSelectedStoryId(storyId);
    } else {
      setSelectedStoryId(null);
    }
  }, [location.pathname]);

  const handleStorySelect = (storyId) => {
    setSelectedStoryId(storyId);
    navigate(`/story/${storyId}`);
  };

  const handleStoryClose = () => {
    setSelectedStoryId(null);
    navigate('/');
  };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<StoryLibrary onStorySelect={handleStorySelect} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/story/:storyId" element={<StoryPlay onClose={handleStoryClose} />} />
      </Route>
    </Routes>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <Router>
            <AppContent />
          </Router>
        </QueryClientProvider>
      </WagmiProvider>
    </ErrorBoundary>
  );
}

export default App;
