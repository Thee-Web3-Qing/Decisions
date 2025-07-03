import { useState, useCallback } from 'react';
import { useWeb3 } from '../components/Web3Provider';
import gaslessTransactionService from '../services/gaslessTransactions';

export const useGaslessTransactions = () => {
  const { address, isConnected } = useWeb3();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lastTransaction, setLastTransaction] = useState(null);

  // Record story choice gaslessly
  const recordChoice = useCallback(async (storyId, decisionId, choiceId) => {
    if (!isConnected || !address) {
      throw new Error('Wallet not connected');
    }

    setIsLoading(true);
    setError(null);

    try {
      // Check eligibility first
      const eligibility = await gaslessTransactionService.checkEligibility(address);
      
      if (!eligibility.eligible) {
        throw new Error(`Not eligible for gasless transactions: ${eligibility.reason}`);
      }

      // Record the choice
      const result = await gaslessTransactionService.recordChoiceGasless(
        storyId,
        decisionId,
        choiceId,
        address
      );

      setLastTransaction(result);
      return result;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, [isConnected, address]);

  // Mint story ending NFT gaslessly
  const mintEnding = useCallback(async (storyId, endingId, metadata) => {
    if (!isConnected || !address) {
      throw new Error('Wallet not connected');
    }

    setIsLoading(true);
    setError(null);

    try {
      // Check eligibility first
      const eligibility = await gaslessTransactionService.checkEligibility(address);
      
      if (!eligibility.eligible) {
        throw new Error(`Not eligible for gasless transactions: ${eligibility.reason}`);
      }

      // Mint the ending
      const result = await gaslessTransactionService.mintEndingGasless(
        storyId,
        endingId,
        metadata,
        address
      );

      setLastTransaction(result);
      return result;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, [isConnected, address]);

  // Batch update story progress gaslessly
  const batchUpdateProgress = useCallback(async (updates) => {
    if (!isConnected || !address) {
      throw new Error('Wallet not connected');
    }

    setIsLoading(true);
    setError(null);

    try {
      // Check eligibility first
      const eligibility = await gaslessTransactionService.checkEligibility(address);
      
      if (!eligibility.eligible) {
        throw new Error(`Not eligible for gasless transactions: ${eligibility.reason}`);
      }

      // Batch update progress
      const result = await gaslessTransactionService.batchUpdateProgressGasless(
        updates,
        address
      );

      setLastTransaction(result);
      return result;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, [isConnected, address]);

  // Check transaction status
  const checkTransactionStatus = useCallback(async (txHash) => {
    try {
      return await gaslessTransactionService.getTransactionStatus(txHash);
    } catch (err) {
      setError(err.message);
      throw err;
    }
  }, []);

  // Check eligibility for gasless transactions
  const checkEligibility = useCallback(async () => {
    if (!address) {
      return { eligible: false, reason: 'Wallet not connected' };
    }

    try {
      return await gaslessTransactionService.checkEligibility(address);
    } catch (err) {
      setError(err.message);
      return { eligible: false, reason: 'Check failed' };
    }
  }, [address]);

  // Clear error
  const clearError = useCallback(() => {
    setError(null);
  }, []);

  // Clear last transaction
  const clearLastTransaction = useCallback(() => {
    setLastTransaction(null);
  }, []);

  return {
    // Functions
    recordChoice,
    mintEnding,
    batchUpdateProgress,
    checkTransactionStatus,
    checkEligibility,
    clearError,
    clearLastTransaction,
    
    // State
    isLoading,
    error,
    lastTransaction,
    
    // Computed
    canUseGasless: isConnected && address
  };
}; 