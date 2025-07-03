import { http, createConfig } from "wagmi";
import { baseSepolia, base } from "wagmi/chains";
import { coinbaseWallet } from "wagmi/connectors";

// Coinbase Wallet connector with Smart Wallet preference
export const cbWalletConnector = coinbaseWallet({
  appName: "Web3 Life",
  preference: "smartWalletOnly", // Use Smart Wallet for gasless transactions
});

// Wagmi configuration
export const config = createConfig({
  chains: [baseSepolia, base], // Support both testnet and mainnet
  multiInjectedProviderDiscovery: false, // Turn off injected provider discovery
  connectors: [cbWalletConnector],
  ssr: true,
  transports: {
    [baseSepolia.id]: http(),
    [base.id]: http(),
  },
});

// Paymaster configuration
export const PAYMASTER_CONFIG = {
  // For development, use local proxy. In production, use your actual Paymaster service URL
  serviceUrl: import.meta.env.VITE_PAYMASTER_PROXY_SERVER_URL || `${window.location.origin}/api/paymaster`,
  
  // Contract allowlist for sponsored transactions
  allowedContracts: {
    // Story storage contract (to be deployed)
    storyStorage: {
      address: '0x...', // TODO: Deploy and add contract address
      functions: ['recordChoice', 'updateProgress', 'batchUpdate']
    },
    // NFT minting contract (to be deployed)
    nftMinting: {
      address: '0x...', // TODO: Deploy and add contract address
      functions: ['mintEnding', 'mintAchievement']
    }
  },
  
  // Gas limits for different operations
  gasLimits: {
    recordChoice: '50000',
    mintEnding: '200000',
    batchUpdate: '100000'
  }
}; 