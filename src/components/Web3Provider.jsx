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
  const { setFrameReady, isFrameReady, context, updateClientContext } = useMiniKit();

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

  const value = {
    isInitialized,
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