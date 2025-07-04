import {
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletDropdownDisconnect,
} from '@coinbase/onchainkit/wallet';
import {
  Address,
  Avatar,
  Name,
  Identity,
} from '@coinbase/onchainkit/identity';
import { Box } from '@mui/material';
import { useAccount } from 'wagmi';

const OnchainKitWallet = () => {
  const { isConnected } = useAccount();

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <Wallet>
        <ConnectWallet>
          <Avatar style={{ width: '24px', height: '24px' }} />
          <Name />
        </ConnectWallet>
        <WalletDropdown>
          <Identity style={{ padding: '12px 16px 8px 16px' }} hasCopyAddressOnClick>
            <Avatar />
            <Name />
            <Address style={{ color: 'rgba(255,255,255,0.7)' }} />
          </Identity>
          <WalletDropdownDisconnect />
        </WalletDropdown>
      </Wallet>
    </Box>
  );
};

export default OnchainKitWallet; 