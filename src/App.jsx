import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MiniKitProvider } from '@coinbase/onchainkit/minikit';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { config } from './config/wagmi';
import Layout from './components/Layout';
import StoryLibrary from './components/StoryLibrary';
import Profile from './components/Profile';
import StoryPlay from './components/StoryPlay';
import './App.css';

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <MiniKitProvider
          projectId="web3-life-mini-app"
          notificationProxyUrl="/api/notification"
        >
          <Router>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<StoryLibrary />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/story/:storyId" element={<StoryPlay />} />
              </Route>
            </Routes>
          </Router>
        </MiniKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
