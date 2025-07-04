import { useWeb3 } from './Web3Provider';
import { Avatar, Name } from '@coinbase/onchainkit/identity';
import { base } from 'viem/chains';
import { Box, Typography, Card, CardContent, Chip } from '@mui/material';

const WalletDebug = () => {
  const { isConnected, address, connect, disconnect } = useWeb3();

  return (
    <Card sx={{ maxWidth: 600, width: '100%', mb: 3, borderRadius: 3, boxShadow: 4 }}>
      <CardContent sx={{ p: 3 }}>
        <Typography variant="h6" fontWeight={700} color="primary" gutterBottom>
          Wallet Connection Debug
        </Typography>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Chip 
              label={isConnected ? 'Connected' : 'Disconnected'} 
              color={isConnected ? 'success' : 'default'}
              size="small"
            />
            <Typography variant="body2" color="text.secondary">
              Status: {isConnected ? 'Wallet is connected' : 'No wallet connected'}
            </Typography>
          </Box>

          {isConnected && address ? (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
              <Avatar 
                address={address} 
                chain={base}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: '2px solid rgba(59, 130, 246, 0.5)'
                }}
              />
              <Box>
                <Typography variant="body1" fontWeight={600} color="primary">
                  <Name address={address} chain={base} fallback="No Basename" />
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Address: {address}
                </Typography>
              </Box>
            </Box>
          ) : (
            <Typography variant="body2" color="text.secondary">
              Connect your wallet to see your Basename
            </Typography>
          )}

          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {!isConnected ? (
              <Chip 
                label="Connect Wallet" 
                color="primary" 
                onClick={connect}
                sx={{ cursor: 'pointer' }}
              />
            ) : (
              <Chip 
                label="Disconnect" 
                color="error" 
                onClick={disconnect}
                sx={{ cursor: 'pointer' }}
              />
            )}
          </Box>

          <Box sx={{ mt: 2, p: 2, bgcolor: 'rgba(0,0,0,0.05)', borderRadius: 2 }}>
            <Typography variant="caption" color="text.secondary">
              <strong>Debug Info:</strong><br/>
              • Each user should see their own wallet address and Basename<br/>
              • If you see the same wallet on different devices, try disconnecting and reconnecting<br/>
              • This uses Coinbase Wallet (MiniKit) for connection
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default WalletDebug; 