import { useAccount } from 'wagmi';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';

const OnchainKitWallet = () => {
  const { isConnected, address } = useAccount();
  const iconColor = isConnected ? 'success.main' : 'grey.500';

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <Tooltip title={isConnected ? 'Wallet Connected' : 'Connect Wallet'}>
        <AccountBalanceWalletIcon sx={{ color: iconColor, fontSize: 28, transition: 'color 0.2s' }} />
      </Tooltip>
      {isConnected && address && (
        <Chip
          label={address.slice(0, 6) + '...' + address.slice(-4)}
          size="small"
          sx={{ bgcolor: 'rgba(34,197,94,0.08)', color: 'success.main', fontWeight: 600, fontSize: '0.95em' }}
        />
      )}
    </Box>
  );
};

export default OnchainKitWallet; 