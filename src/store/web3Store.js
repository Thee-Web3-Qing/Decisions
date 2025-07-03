import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Mock Web3 functions - replace with actual Base integration when available
const mockOnchainKit = {
  connect: async () => ({ address: '0x1234...5678', chainId: 8453 }),
  disconnect: async () => {},
  isConnected: () => true,
  getAddress: () => '0x1234...5678',
  signMessage: async (message) => '0xsigned_message_hash',
  sendTransaction: async (tx) => ({ hash: '0xtransaction_hash' })
};

const mockMiniKit = {
  createMiniApp: async (config) => ({ id: 'web3-life-mini-app' }),
  updateMiniApp: async (id, data) => ({ success: true }),
  getMiniApp: async (id) => ({ id, data: {} })
};

const mockPaymaster = {
  sponsorTransaction: async (tx) => ({ sponsoredTx: tx, gasless: true }),
  estimateGas: async (tx) => ({ gasLimit: '21000', gasPrice: '2000000000' })
};

const STORY_ID = 1; // Uche's Journey

export const useWeb3Store = create(
  persist(
    (set, get) => ({
      // Connection state
      isConnected: false,
      address: null,
      chainId: null,
      
      // Story progress
      storyProgress: {},
      userChoices: {},
      achievements: [],
      
      // Onchain data
      onchainStories: [],
      mintedEndings: [],
      
      // Progress
      progress: {}, // { [address or 'guest']: { completed: bool, choices: [] } }
      
      // Connect wallet
      connect: async () => {
        try {
          const result = await mockOnchainKit.connect();
          set({
            isConnected: true,
            address: result.address,
            chainId: result.chainId
          });
          return result;
        } catch (error) {
          console.error('Failed to connect:', error);
          throw error;
        }
      },
      
      // Disconnect wallet
      disconnect: async () => {
        try {
          await mockOnchainKit.disconnect();
          set({
            isConnected: false,
            address: null,
            chainId: null
          });
        } catch (error) {
          console.error('Failed to disconnect:', error);
        }
      },
      
      // Record story choice onchain
      recordChoice: async (storyId, decisionId, choiceId) => {
        try {
          const { address } = get();
          if (!address) throw new Error('Wallet not connected');
          
          // Create choice data
          const choiceData = {
            storyId,
            decisionId,
            choiceId,
            timestamp: Date.now(),
            userAddress: address
          };
          
          // Sign the choice data
          const message = JSON.stringify(choiceData);
          const signature = await mockOnchainKit.signMessage(message);
          
          // Store choice locally
          const currentChoices = get().userChoices[storyId] || [];
          set({
            userChoices: {
              ...get().userChoices,
              [storyId]: [...currentChoices, { ...choiceData, signature }]
            }
          });
          
          // TODO: Send to Base onchain when packages are available
          console.log('Choice recorded:', choiceData);
          
          return { success: true, signature };
        } catch (error) {
          console.error('Failed to record choice:', error);
          throw error;
        }
      },
      
      // Mint story ending as NFT
      mintEnding: async (storyId, endingId, storyPath) => {
        try {
          const { address } = get();
          if (!address) throw new Error('Wallet not connected');
          
          // Create ending metadata
          const endingMetadata = {
            name: `Web3 Life - ${endingId}`,
            description: `Your unique ending in the Web3 Life story. Path: ${storyPath.join(' → ')}`,
            image: `https://web3-life.app/endings/${endingId}.png`,
            attributes: [
              { trait_type: 'Story', value: storyId },
              { trait_type: 'Ending', value: endingId },
              { trait_type: 'Choices Made', value: storyPath.length },
              { trait_type: 'Minted On', value: new Date().toISOString() }
            ]
          };
          
          // Sign metadata
          const message = JSON.stringify(endingMetadata);
          const signature = await mockOnchainKit.signMessage(message);
          
          // TODO: Mint NFT on Base when packages are available
          const mintedEnding = {
            id: `${storyId}-${endingId}-${Date.now()}`,
            storyId,
            endingId,
            metadata: endingMetadata,
            signature,
            timestamp: Date.now(),
            txHash: '0xmock_transaction_hash'
          };
          
          // Store locally
          set({
            mintedEndings: [...get().mintedEndings, mintedEnding]
          });
          
          console.log('Ending minted:', mintedEnding);
          return mintedEnding;
        } catch (error) {
          console.error('Failed to mint ending:', error);
          throw error;
        }
      },
      
      // Update story progress
      updateProgress: (storyId, progress) => {
        set({
          storyProgress: {
            ...get().storyProgress,
            [storyId]: progress
          }
        });
      },
      
      // Unlock achievement
      unlockAchievement: (achievementId) => {
        const { achievements } = get();
        if (!achievements.includes(achievementId)) {
          set({
            achievements: [...achievements, achievementId]
          });
        }
      },
      
      // Get user's story path
      getStoryPath: (storyId) => {
        return get().userChoices[storyId] || [];
      },
      
      // Check if user has completed a story
      hasCompletedStory: (storyId) => {
        const choices = get().userChoices[storyId] || [];
        return choices.length >= 5; // Assuming 5 decisions per story
      },
      
      // Get user's minted endings
      getMintedEndings: () => {
        return get().mintedEndings;
      },

      setAddress: (address) => set({ address }),

      getProgress: () => {
        const { address, progress } = get();
        return progress[address || 'guest'] || { completed: false, choices: [] };
      },

      setProgress: (data) => {
        const { address, progress } = get();
        set({
          progress: {
            ...progress,
            [address || 'guest']: data
          }
        });
      },

      resetProgress: () => {
        const { address, progress } = get();
        set({
          progress: {
            ...progress,
            [address || 'guest']: { completed: false, choices: [] }
          }
        });
      },
    }),
    {
      name: 'web3-life-storage',
      partialize: (state) => ({
        storyProgress: state.storyProgress,
        userChoices: state.userChoices,
        achievements: state.achievements,
        mintedEndings: state.mintedEndings,
        progress: state.progress,
        address: state.address
      })
    }
  )
); 