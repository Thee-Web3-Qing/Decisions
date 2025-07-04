import { useState } from 'react';
import { Avatar, Name, useAvatar, useName } from '@coinbase/onchainkit/identity';
import { getAvatar, getName } from '@coinbase/onchainkit/identity';
import { base } from 'viem/chains';
import { useAccount } from 'wagmi';

const BasenameDemo = () => {
  const { address } = useAccount();
  const [customAddress, setCustomAddress] = useState('0x02feeb0AdE57b6adEEdE5A4EEea6Cf8c21BeB6B1');
  const [basename, setBasename] = useState('zizzamia.base.eth');
  
  // Using hooks for the connected wallet
  const { data: avatar, isLoading: avatarIsLoading } = useAvatar({ 
    address, 
    chain: base 
  });
  const { data: name, isLoading: nameIsLoading } = useName({ 
    address, 
    chain: base 
  });

  // Function to demonstrate utility functions
  const handleUtilityDemo = async () => {
    try {
      const avatarData = await getAvatar({ ensName: basename, chain: base });
      const nameData = await getName({ address: customAddress, chain: base });
      
      console.log('Avatar data:', avatarData);
      console.log('Name data:', nameData);
      
      alert(`Avatar: ${avatarData || 'No avatar found'}\nName: ${nameData || 'No name found'}`);
    } catch (error) {
      console.error('Error fetching Basename data:', error);
      alert('Error fetching Basename data. Check console for details.');
    }
  };

  return (
    <div className="main-content">
      <div className="container">
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }} className="text-white mb-6">
          Basename Integration Demo
        </h1>
        
        <div style={{ display: 'grid', gap: '2rem' }}>
          
          {/* Connected Wallet Section */}
          <div className="glass" style={{ padding: '2rem', borderRadius: '0.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }} className="text-white mb-4">
              Your Connected Wallet
            </h2>
            
            <div style={{ 
              background: 'rgba(59, 130, 246, 0.1)', 
              border: '1px solid rgba(59, 130, 246, 0.3)',
              borderRadius: '0.5rem', 
              padding: '1rem', 
              marginBottom: '1rem',
              textAlign: 'center'
            }}>
              <p className="text-blue-300" style={{ fontSize: '0.875rem', margin: 0 }}>
                <strong>Note:</strong> This shows YOUR connected wallet. Each user will see their own wallet address and Basename.
              </p>
            </div>
            
            {address ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <Avatar 
                  address={address} 
                  chain={base}
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    border: '2px solid rgba(59, 130, 246, 0.5)'
                  }}
                />
                <div>
                  <div style={{ fontSize: '1.25rem', fontWeight: '600' }} className="text-white">
                    <Name address={address} chain={base} fallback="No Basename" />
                  </div>
                  <div className="text-gray-400" style={{ fontSize: '0.875rem' }}>
                    {address}
                  </div>
                  {avatarIsLoading && <div className="text-blue-400">Loading avatar...</div>}
                  {nameIsLoading && <div className="text-blue-400">Loading name...</div>}
                </div>
              </div>
            ) : (
              <p className="text-gray-300">Connect your wallet to see your Basename</p>
            )}
          </div>

          {/* React Components Demo */}
          <div className="glass" style={{ padding: '2rem', borderRadius: '0.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }} className="text-white mb-4">
              React Components Demo
            </h2>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <Avatar 
                address={customAddress} 
                chain={base}
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  border: '2px solid rgba(16, 185, 129, 0.5)'
                }}
              />
              <div>
                <div style={{ fontSize: '1.125rem', fontWeight: '600' }} className="text-white">
                  <Name address={customAddress} chain={base} fallback="No Basename" />
                </div>
                <div className="text-gray-400" style={{ fontSize: '0.875rem' }}>
                  {customAddress}
                </div>
              </div>
            </div>
          </div>

          {/* Utility Functions Demo */}
          <div className="glass" style={{ padding: '2rem', borderRadius: '0.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }} className="text-white mb-4">
              Utility Functions Demo
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label className="text-gray-300" style={{ display: 'block', marginBottom: '0.5rem' }}>
                  Address to lookup:
                </label>
                <input
                  type="text"
                  value={customAddress}
                  onChange={(e) => setCustomAddress(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.5rem',
                    borderRadius: '0.25rem',
                    border: '1px solid rgba(255,255,255,0.2)',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    color: 'white',
                    fontSize: '0.875rem'
                  }}
                  placeholder="Enter Ethereum address"
                />
              </div>
              
              <div>
                <label className="text-gray-300" style={{ display: 'block', marginBottom: '0.5rem' }}>
                  Basename to lookup:
                </label>
                <input
                  type="text"
                  value={basename}
                  onChange={(e) => setBasename(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.5rem',
                    borderRadius: '0.25rem',
                    border: '1px solid rgba(255,255,255,0.2)',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    color: 'white',
                    fontSize: '0.875rem'
                  }}
                  placeholder="Enter Basename (e.g., zizzamia.base.eth)"
                />
              </div>
              
              <button
                onClick={handleUtilityDemo}
                className="btn btn-primary"
                style={{ alignSelf: 'flex-start' }}
              >
                Fetch Basename Data
              </button>
            </div>
          </div>

          {/* Information Section */}
          <div className="glass" style={{ padding: '2rem', borderRadius: '0.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }} className="text-white mb-4">
              About Basenames
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600' }} className="text-blue-400">
                  What are Basenames?
                </h3>
                <p className="text-gray-300">
                  Basenames are human-readable names for wallet addresses on Base, similar to ENS names on Ethereum. 
                  They operate entirely onchain and help establish identity in the Web3 ecosystem.
                </p>
              </div>
              
              <div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600' }} className="text-blue-400">
                  How to use them:
                </h3>
                <ul className="text-gray-300" style={{ paddingLeft: '1rem' }}>
                  <li>• <strong>React Components:</strong> Use &lt;Avatar&gt; and &lt;Name&gt; for easy display</li>
                  <li>• <strong>React Hooks:</strong> Use useAvatar and useName for custom components</li>
                  <li>• <strong>Utility Functions:</strong> Use getAvatar and getName for any TypeScript project</li>
                </ul>
              </div>
              
              <div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600' }} className="text-blue-400">
                  Key Features:
                </h3>
                <ul className="text-gray-300" style={{ paddingLeft: '1rem' }}>
                  <li>• Automatic fallback to address if no Basename is found</li>
                  <li>• Built-in loading states</li>
                  <li>• Chain-specific (Base) for optimal performance</li>
                  <li>• Seamless integration with OnchainKit</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasenameDemo; 