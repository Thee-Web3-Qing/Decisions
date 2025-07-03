import { BASE_CONFIG } from '../config/base';

// Mock Paymaster service - replace with real Base Paymaster when available
class GaslessTransactionService {
  constructor() {
    this.paymasterUrl = BASE_CONFIG.paymaster.url || 'https://paymaster.base.org';
    this.isEnabled = BASE_CONFIG.paymaster.enabled;
  }

  // Estimate gas for a transaction
  async estimateGas(transaction) {
    try {
      // Mock gas estimation - replace with real estimation
      const baseGas = {
        recordChoice: 50000,
        mintEnding: 200000,
        batchUpdate: 100000
      };

      const gasLimit = baseGas[transaction.type] || 100000;
      const gasPrice = '2000000000'; // 2 gwei

      return {
        gasLimit: gasLimit.toString(),
        gasPrice,
        totalCost: (BigInt(gasLimit) * BigInt(gasPrice)).toString()
      };
    } catch (error) {
      console.error('Gas estimation failed:', error);
      throw new Error('Failed to estimate gas');
    }
  }

  // Sponsor a transaction (make it gasless)
  async sponsorTransaction(transaction, userAddress) {
    try {
      if (!this.isEnabled) {
        throw new Error('Paymaster is not enabled');
      }

      // Mock sponsored transaction - replace with real Paymaster call
      const sponsoredTx = {
        ...transaction,
        gasless: true,
        sponsoredBy: 'Base Paymaster',
        userAddress,
        timestamp: Date.now()
      };

      console.log('Transaction sponsored:', sponsoredTx);
      return sponsoredTx;
    } catch (error) {
      console.error('Transaction sponsorship failed:', error);
      throw new Error('Failed to sponsor transaction');
    }
  }

  // Record a story choice gaslessly
  async recordChoiceGasless(storyId, decisionId, choiceId, userAddress) {
    try {
      const transaction = {
        type: 'recordChoice',
        data: {
          storyId,
          decisionId,
          choiceId,
          timestamp: Date.now()
        },
        to: BASE_CONFIG.onchainKit.storyStorage.contractAddress,
        value: '0'
      };

      const gasEstimate = await this.estimateGas(transaction);
      const sponsoredTx = await this.sponsorTransaction(transaction, userAddress);

      return {
        success: true,
        transaction: sponsoredTx,
        gasEstimate,
        signature: `0x${Math.random().toString(16).slice(2)}` // Mock signature
      };
    } catch (error) {
      console.error('Failed to record choice gaslessly:', error);
      throw error;
    }
  }

  // Mint story ending NFT gaslessly
  async mintEndingGasless(storyId, endingId, metadata, userAddress) {
    try {
      const transaction = {
        type: 'mintEnding',
        data: {
          storyId,
          endingId,
          metadata,
          timestamp: Date.now()
        },
        to: BASE_CONFIG.onchainKit.nftMinting.contractAddress,
        value: BASE_CONFIG.stories.mintingCost
      };

      const gasEstimate = await this.estimateGas(transaction);
      const sponsoredTx = await this.sponsorTransaction(transaction, userAddress);

      return {
        success: true,
        transaction: sponsoredTx,
        gasEstimate,
        tokenId: Math.floor(Math.random() * 1000000), // Mock token ID
        signature: `0x${Math.random().toString(16).slice(2)}` // Mock signature
      };
    } catch (error) {
      console.error('Failed to mint ending gaslessly:', error);
      throw error;
    }
  }

  // Batch update story progress gaslessly
  async batchUpdateProgressGasless(updates, userAddress) {
    try {
      const transaction = {
        type: 'batchUpdate',
        data: {
          updates,
          timestamp: Date.now()
        },
        to: BASE_CONFIG.onchainKit.storyStorage.contractAddress,
        value: '0'
      };

      const gasEstimate = await this.estimateGas(transaction);
      const sponsoredTx = await this.sponsorTransaction(transaction, userAddress);

      return {
        success: true,
        transaction: sponsoredTx,
        gasEstimate,
        signature: `0x${Math.random().toString(16).slice(2)}` // Mock signature
      };
    } catch (error) {
      console.error('Failed to batch update progress gaslessly:', error);
      throw error;
    }
  }

  // Check if user is eligible for gasless transactions
  async checkEligibility(userAddress) {
    try {
      // Mock eligibility check - replace with real check
      const isWhitelisted = BASE_CONFIG.paymaster.whitelistedAddresses.includes(userAddress);
      const hasUsedToday = false; // Mock usage tracking

      return {
        eligible: isWhitelisted || !hasUsedToday,
        reason: isWhitelisted ? 'Whitelisted address' : 'First time user',
        dailyUsage: 0,
        maxDailyUsage: 10
      };
    } catch (error) {
      console.error('Eligibility check failed:', error);
      return { eligible: false, reason: 'Check failed' };
    }
  }

  // Get transaction status
  async getTransactionStatus(txHash) {
    try {
      // Mock transaction status - replace with real blockchain check
      const statuses = ['pending', 'confirmed', 'failed'];
      const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];

      return {
        hash: txHash,
        status: randomStatus,
        confirmations: randomStatus === 'confirmed' ? 12 : 0,
        timestamp: Date.now()
      };
    } catch (error) {
      console.error('Failed to get transaction status:', error);
      throw error;
    }
  }
}

// Create singleton instance
const gaslessTransactionService = new GaslessTransactionService();

export default gaslessTransactionService; 