import { useWeb3 } from './Web3Provider';

const WalletConnect = () => {
  const { isConnected, address, connect, disconnect } = useWeb3();

  const handleConnect = async () => {
    try {
      await connect();
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    }
  };

  const handleDisconnect = async () => {
    try {
      await disconnect();
    } catch (error) {
      console.error('Failed to disconnect wallet:', error);
    }
  };

  return (
    <div className="glass" style={{ 
      padding: '1rem', 
      borderRadius: '0.5rem',
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    }}>
      {isConnected ? (
        <>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#10b981'
            }}></div>
            <span className="text-gray-300" style={{ fontSize: '0.875rem' }}>
              {address ? `${address.slice(0, 6)}...${address.slice(-4)}` : 'Connected'}
            </span>
          </div>
          <button 
            onClick={handleDisconnect}
            className="btn btn-secondary"
            style={{ fontSize: '0.75rem', padding: '0.5rem 1rem' }}
          >
            Disconnect
          </button>
        </>
      ) : (
        <>
          <span className="text-gray-300" style={{ fontSize: '0.875rem' }}>
            Connect wallet to save progress onchain
          </span>
          <button 
            onClick={handleConnect}
            className="btn btn-primary"
            style={{ fontSize: '0.875rem', padding: '0.75rem 1.5rem' }}
          >
            Connect Wallet
          </button>
        </>
      )}
    </div>
  );
};

export default WalletConnect; 