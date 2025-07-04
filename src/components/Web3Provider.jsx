import { createContext, useContext, useEffect, useState } from 'react';
import { MiniKitProvider, useMiniKit } from '@coinbase/onchainkit/minikit';

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
  const { 
    setFrameReady, 
    isFrameReady, 
    context, 
    updateClientContext,
    isConnected,
    address,
    connect,
    disconnect
  } = useMiniKit();

  useEffect(() => {
    // Initialize MiniKit when component mounts
    const initWeb3 = async () => {
      try {
        if (!isFrameReady) {
          setFrameReady();
        }
        setIsInitialized(true);
      } catch (error) {
        setIsInitialized(true);
      }
    };
    initWeb3();
  }, [isFrameReady, setFrameReady]);

  // Mock mintEnding function for now
  const mintEnding = async (storyId, endingId, metadata) => {
    console.log('Minting ending:', { storyId, endingId, metadata });
    // This would integrate with actual minting logic
    return {
      success: true,
      transaction: {
        tokenId: Math.floor(Math.random() * 1000000),
        txHash: `0x${Math.random().toString(16).slice(2)}`
      }
    };
  };

  const value = {
    isInitialized,
    context,
    updateClientContext,
    isFrameReady,
    isConnected,
    address,
    connect,
    disconnect,
    mintEnding
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