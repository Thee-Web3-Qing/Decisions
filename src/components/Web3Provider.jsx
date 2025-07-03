import { createContext, useContext, useEffect, useState } from 'react';
import { MiniKitProvider, useMiniKit } from '@coinbase/onchainkit/minikit';
import { useWeb3Store } from '../store/web3Store';

const Web3Context = createContext();

export const useWeb3 = () => {
  const context = useContext(Web3Context);
  if (!context) {
    throw new Error('useWeb3 must be used within a Web3Provider');
  }
  return context;
};

// Inner provider that uses MiniKit hooks
const Web3InnerProvider = ({ children }) => {
  const [isInitialized, setIsInitialized] = useState(false);
  const { setFrameReady, isFrameReady, context, updateClientContext } = useMiniKit();
  const {
    isConnected,
    address,
    connect,
    disconnect,
    recordChoice,
    mintEnding,
    updateProgress,
    unlockAchievement
  } = useWeb3Store();

  useEffect(() => {
    // Initialize MiniKit when component mounts
    const initWeb3 = async () => {
      try {
        // Set frame ready when app is loaded
        if (!isFrameReady) {
          setFrameReady();
        }
        
        console.log('MiniKit initialized');
        setIsInitialized(true);
      } catch (error) {
        console.error('Failed to initialize MiniKit:', error);
        setIsInitialized(true); // Still set to true to not block the app
      }
    };

    initWeb3();
  }, [isFrameReady, setFrameReady]);

  const value = {
    isInitialized,
    isConnected,
    address,
    connect,
    disconnect,
    recordChoice,
    mintEnding,
    updateProgress,
    unlockAchievement,
    // MiniKit specific functions
    context,
    updateClientContext,
    isFrameReady
  };

  return (
    <Web3Context.Provider value={value}>
      {children}
    </Web3Context.Provider>
  );
};

// Main provider that wraps with MiniKitProvider
export const Web3Provider = ({ children }) => {
  return (
    <MiniKitProvider
      projectId="web3-life-mini-app"
      notificationProxyUrl="/api/notification"
    >
      <Web3InnerProvider>
        {children}
      </Web3InnerProvider>
    </MiniKitProvider>
  );
}; 