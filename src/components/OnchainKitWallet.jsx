import {
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletDropdownBasename, 
  WalletDropdownFundLink, 
  WalletDropdownLink, 
  WalletDropdownDisconnect,
} from '@coinbase/onchainkit/wallet';
import {
  Address,
  Avatar,
  Name,
  Identity,
  EthBalance, 
} from '@coinbase/onchainkit/identity';
import { base } from 'viem/chains';

const OnchainKitWallet = () => {
  return (
    <Wallet>
      <ConnectWallet 
        className="glass" 
        style={{
          padding: '0.5rem 1rem',
          borderRadius: '0.5rem',
          border: '1px solid rgba(255,255,255,0.1)',
          background: 'rgba(255,255,255,0.05)',
          backdropFilter: 'blur(10px)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          color: '#e2e8f0'
        }}
        disconnectedLabel="Connect Wallet"
      >
        <Avatar className="h-6 w-6" chain={base} />
        <Name chain={base} />
      </ConnectWallet>
      
      <WalletDropdown>
        <Identity 
          className="px-4 pt-3 pb-2" 
          hasCopyAddressOnClick
          style={{
            borderBottom: '1px solid rgba(255,255,255,0.1)',
            marginBottom: '0.5rem'
          }}
        >
          <Avatar chain={base} />
          <Name chain={base} />
          <Address style={{ color: '#94a3b8', fontSize: '0.875rem' }} />
          <EthBalance />
        </Identity>
        
        <WalletDropdownBasename />
        
        <WalletDropdownLink
          icon="wallet"
          href="https://keys.coinbase.com"
          style={{
            color: '#e2e8f0',
            textDecoration: 'none',
            padding: '0.75rem 1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'background-color 0.2s ease'
          }}
        >
          Wallet
        </WalletDropdownLink>
        
        <WalletDropdownLink
          icon="profile"
          href="/profile"
          style={{
            color: '#e2e8f0',
            textDecoration: 'none',
            padding: '0.75rem 1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'background-color 0.2s ease'
          }}
        >
          My Stories
        </WalletDropdownLink>
        
        <WalletDropdownFundLink />
        
        <WalletDropdownDisconnect 
          style={{
            color: '#ef4444',
            padding: '0.75rem 1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'background-color 0.2s ease',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            marginTop: '0.5rem'
          }}
        />
      </WalletDropdown>
    </Wallet>
  );
};

export default OnchainKitWallet; 