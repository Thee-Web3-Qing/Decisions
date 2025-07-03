// Base configuration for Decisions mini app
export const BASE_CONFIG = {
  // Base network configuration
  chainId: 8453, // Base mainnet
  chainName: 'Base',
  rpcUrl: 'https://mainnet.base.org',
  explorerUrl: 'https://basescan.org',
  
  // MiniKit configuration
  miniKit: {
    appId: 'decisions-app',
    appName: 'Decisions',
    appDescription: 'Interactive choose-your-own-adventure stories on Base',
    appIcon: '/app-icon.png',
    appUrl: 'https://decisions.app',
    supportedChains: [8453], // Base only
    features: ['story-progress', 'choice-tracking', 'ending-minting']
  },
  
  // OnchainKit configuration
  onchainKit: {
    // Story data storage
    storyStorage: {
      contractAddress: '0x...', // TODO: Deploy contract
      abi: [], // TODO: Add contract ABI
      gasless: true
    },
    
    // Choice recording
    choiceRecording: {
      batchSize: 10,
      gasless: true,
      paymaster: true
    },
    
    // NFT minting
    nftMinting: {
      contractAddress: '0x...', // TODO: Deploy NFT contract
      abi: [], // TODO: Add NFT contract ABI
      gasless: true,
      paymaster: true
    }
  },
  
  // Paymaster configuration
  paymaster: {
    enabled: true,
    sponsorGas: true,
    maxGasLimit: '500000',
    allowedTokens: ['ETH', 'USDC'],
    whitelistedAddresses: [] // TODO: Add whitelist
  },
  
  // Story-specific configuration
  stories: {
    maxChoicesPerStory: 5,
    maxStoriesPerUser: 10,
    choiceCost: '0', // Gasless
    mintingCost: '0.001', // ETH
    gaslessTransactions: true
  }
};

// Contract ABIs (to be filled when contracts are deployed)
export const CONTRACT_ABIS = {
  storyStorage: [],
  nftMinting: [],
  paymaster: []
};

// Gas estimation for different operations
export const GAS_ESTIMATES = {
  recordChoice: '50000',
  mintEnding: '200000',
  batchUpdate: '100000'
};

// Error messages
export const ERROR_MESSAGES = {
  WALLET_NOT_CONNECTED: 'Please connect your wallet to continue',
  INSUFFICIENT_BALANCE: 'Insufficient balance for transaction',
  NETWORK_ERROR: 'Please switch to Base network',
  TRANSACTION_FAILED: 'Transaction failed. Please try again.',
  CHOICE_ALREADY_RECORDED: 'This choice has already been recorded'
};

// Success messages
export const SUCCESS_MESSAGES = {
  CHOICE_RECORDED: 'Choice recorded onchain successfully!',
  ENDING_MINTED: 'Story ending minted as NFT!',
  PROGRESS_SAVED: 'Progress saved to blockchain',
  ACHIEVEMENT_UNLOCKED: 'Achievement unlocked!'
}; 