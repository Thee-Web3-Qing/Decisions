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
import { useAccount } from 'wagmi';

// More realistic wallet SVG icon
const WalletIcon = ({ color = '#ef4444', size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="7" width="20" height="12" rx="3" fill="#fff" stroke={color} strokeWidth="2" />
    <rect x="16" y="13" width="2.5" height="2.5" rx="1.25" fill={color} />
    <rect x="2" y="5" width="20" height="4" rx="2" fill={color} opacity="0.15" />
    <rect x="2" y="7" width="20" height="12" rx="3" stroke={color} strokeWidth="2" fill="none" />
    <path d="M6 7V5.5C6 4.11929 7.11929 3 8.5 3H15.5C16.8807 3 18 4.11929 18 5.5V7" stroke={color} strokeWidth="1.5" />
  </svg>
);

const OnchainKitWallet = () => {
  const { isConnected } = useAccount();
  const iconColor = isConnected ? '#22c55e' : '#ef4444'; // green if connected, red if not

  return (
    <Wallet>
      <ConnectWallet 
        className="connect-wallet-icon"
        style={{
          background: 'none',
          border: 'none',
          boxShadow: 'none',
          padding: 0,
          margin: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          outline: 'none',
        }}
        disconnectedLabel={<WalletIcon color={iconColor} size={32} />}
        connectedLabel={<WalletIcon color={iconColor} size={32} />}
        onMouseOver={e => e.currentTarget.firstChild && (e.currentTarget.firstChild.style.opacity = 0.8)}
        onMouseOut={e => e.currentTarget.firstChild && (e.currentTarget.firstChild.style.opacity = 1)}
        onMouseDown={e => e.currentTarget.firstChild && (e.currentTarget.firstChild.style.transform = 'scale(0.95)')}
        onMouseUp={e => e.currentTarget.firstChild && (e.currentTarget.firstChild.style.transform = 'scale(1)')}
      />
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