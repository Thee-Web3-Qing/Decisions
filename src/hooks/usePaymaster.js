import { useAccount } from "wagmi";
import { useMemo, useState } from "react";
import { PAYMASTER_CONFIG } from "../config/wagmi";

export const usePaymaster = () => {
  const account = useAccount();
  const [lastTransactionId, setLastTransactionId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Mock capabilities for now - replace with actual implementation when available
  const availableCapabilities = useMemo(() => {
    if (!account.address) return {};
    
    return {
      [account.chainId]: {
        PaymasterService: {
          supported: true,
          url: PAYMASTER_CONFIG.serviceUrl
        }
      }
    };
  }, [account.address, account.chainId]);

  // Check if Paymaster is available for the current chain
  const capabilities = useMemo(() => {
    if (!availableCapabilities || !account.chainId) return {};
    
    const capabilitiesForChain = availableCapabilities[account.chainId];
    
    if (
      capabilitiesForChain["PaymasterService"] &&
      capabilitiesForChain["PaymasterService"].supported
    ) {
      return {
        PaymasterService: {
          url: PAYMASTER_CONFIG.serviceUrl
        },
      };
    }
    
    return {};
  }, [availableCapabilities, account.chainId]);

  // Record story choice with Paymaster
  const recordChoice = async (storyId, decisionId, choiceId) => {
    if (!account.address) {
      throw new Error("Wallet not connected");
    }

    if (Object.keys(capabilities).length === 0) {
      throw new Error("Paymaster not available. Please use Coinbase Smart Wallet.");
    }

    setIsLoading(true);
    setError(null);

    try {
      // Mock implementation - replace with actual contract call when available
      console.log('Mock: Recording choice', { storyId, decisionId, choiceId, address: account.address });
      
      // Simulate transaction delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockTxId = `0x${Math.random().toString(16).slice(2)}`;
      setLastTransactionId(mockTxId);

      return { success: true, transactionId: mockTxId };
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  // Mint story ending NFT with Paymaster
  const mintEnding = async (storyId, endingId, metadata) => {
    if (!account.address) {
      throw new Error("Wallet not connected");
    }

    if (Object.keys(capabilities).length === 0) {
      throw new Error("Paymaster not available. Please use Coinbase Smart Wallet.");
    }

    setIsLoading(true);
    setError(null);

    try {
      // Mock implementation - replace with actual contract call when available
      console.log('Mock: Minting ending NFT', { storyId, endingId, metadata, address: account.address });
      
      // Simulate transaction delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const mockTxId = `0x${Math.random().toString(16).slice(2)}`;
      setLastTransactionId(mockTxId);

      return { success: true, transactionId: mockTxId };
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  // Batch update story progress with Paymaster
  const batchUpdateProgress = async (updates) => {
    if (!account.address) {
      throw new Error("Wallet not connected");
    }

    if (Object.keys(capabilities).length === 0) {
      throw new Error("Paymaster not available. Please use Coinbase Smart Wallet.");
    }

    setIsLoading(true);
    setError(null);

    try {
      // TODO: Replace with actual contract ABI and address
      const storyStorageABI = [
        {
          name: "batchUpdateProgress",
          type: "function",
          inputs: [
            { name: "updates", type: "bytes" },
            { name: "userAddress", type: "address" }
          ],
          outputs: [],
          stateMutability: "nonpayable"
        }
      ];

      await writeContracts({
        contracts: [
          {
            address: PAYMASTER_CONFIG.allowedContracts.storyStorage.address,
            abi: storyStorageABI,
            functionName: "batchUpdateProgress",
            args: [JSON.stringify(updates), account.address],
          },
        ],
        capabilities,
      });

      return { success: true };
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  // Check if Paymaster is available
  const isPaymasterAvailable = Object.keys(capabilities).length > 0;

  // Clear error
  const clearError = () => setError(null);

  // Clear last transaction
  const clearLastTransaction = () => setLastTransactionId(null);

  return {
    // Functions
    recordChoice,
    mintEnding,
    batchUpdateProgress,
    clearError,
    clearLastTransaction,
    
    // State
    isLoading,
    error,
    lastTransactionId,
    
    // Computed
    isPaymasterAvailable,
    capabilities,
    account: account.address,
    chainId: account.chainId
  };
}; 