import { useAccount } from 'wagmi';
import { Avatar, Name } from '@coinbase/onchainkit/identity';
import { base } from 'viem/chains';
import { useWeb3Store } from '../store/web3Store';

const Profile = () => {
  const { address } = useAccount();
  const { getProgress, setAddress, resetProgress } = useWeb3Store();
  if (address) setAddress(address);
  const progress = getProgress();

  // Uche's Journey only
  const story = {
    id: 1,
    title: "Uche's Journey",
    coverImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
  };

  let status = 'Not started';
  if (progress.completed) status = 'Completed';
  else if (progress.choices && progress.choices.length > 0) status = 'In progress';

  return (
    <div className="main-content">
      <div className="container">
        <div className="profile-header">
          <div className="text-center">
            {address ? (
              <>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                  <Avatar address={address} chain={base} style={{ width: '80px', height: '80px', borderRadius: '50%', border: '3px solid rgba(59, 130, 246, 0.5)' }} />
                </div>
                <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }} className="text-white mb-2">
                  <Name address={address} chain={base} fallback="Web3 Explorer" />
                </h1>
                <p className="text-gray-300">Web3 Adventure Explorer on Base</p>
                <p className="text-gray-400" style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>{address.slice(0, 6)}...{address.slice(-4)}</p>
              </>
            ) : (
              <>
                <div className="profile-avatar">👤</div>
                <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }} className="text-white mb-2">Web3 Explorer</h1>
                <p className="text-gray-300">Web3 Adventure Explorer</p>
                <p className="text-gray-400" style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>Connect your wallet to see your Basename</p>
              </>
            )}
          </div>
        </div>

        <div style={{ margin: '2rem 0' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }} className="text-white mb-4">Your Story Progress</h2>
          <div className="progress-card" style={{ display: 'flex', gap: '1rem', alignItems: 'center', background: 'rgba(30,41,59,0.8)', borderRadius: '0.5rem', padding: '1rem' }}>
            <img src={story.coverImage} alt={story.title} style={{ width: '80px', height: '60px', borderRadius: '0.5rem', objectFit: 'cover' }} />
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600' }} className="text-white">{story.title}</h3>
              <div style={{ fontSize: '0.875rem', color: '#60a5fa', fontWeight: '500', margin: '0.5rem 0' }}>{status}</div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <span className="text-gray-400">Choices made: {progress.choices?.length || 0}</span>
                {progress.completed && (
                  <button className="btn btn-secondary" style={{ fontSize: '0.75rem', marginLeft: '1rem' }} onClick={resetProgress}>Reset Progress</button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
