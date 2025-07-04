import { useMiniKit } from '@coinbase/onchainkit/minikit';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

const OnchainKitWallet = () => {
  const { isConnected, address, connect, disconnect } = useMiniKit();
  const iconColor = isConnected ? 'success.main' : 'grey.500';
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleIconClick = (event) => {
    setAnchorEl(event.currentTarget);
    if (!isConnected) connect();
  };
  const handleClose = () => setAnchorEl(null);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <Tooltip title={isConnected ? 'Wallet Connected' : 'Connect Wallet'}>
        <AccountBalanceWalletIcon
          sx={{ color: iconColor, fontSize: 28, transition: 'color 0.2s', cursor: 'pointer' }}
          onClick={handleIconClick}
        />
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{ sx: { minWidth: 200, p: 1 } }}
      >
        {isConnected && address ? (
          <>
            <MenuItem disabled>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                {address.slice(0, 6) + '-' + address.slice(-4)}
              </Typography>
            </MenuItem>
            <MenuItem onClick={() => { disconnect(); handleClose(); }}>
              <Typography variant="body2" color="error">Disconnect</Typography>
            </MenuItem>
          </>
        ) : (
          <MenuItem onClick={() => { connect(); handleClose(); }}>
            <Typography variant="body2" color="primary">Connect Wallet</Typography>
          </MenuItem>
        )}
      </Menu>
    </Box>
  );
};

export default OnchainKitWallet; 