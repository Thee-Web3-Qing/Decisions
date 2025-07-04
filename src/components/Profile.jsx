import { useAccount } from 'wagmi';
import { Avatar, Name } from '@coinbase/onchainkit/identity';
import { base } from 'viem/chains';
import { stories } from '../data/stories';
import { getStoryProgress, calculateStoryProgress } from '../utils/progressUtils';
import Typography from '@mui/material/Typography';

const Profile = () => {
  const { address, isConnected } = useAccount();

  return (
    <div className="main-content">
      <div className="container">
        <div className="profile-header">
          <div className="text-center">
            {isConnected && address ? (
              <>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                  <Avatar address={address} chain={base} style={{ width: '80px', height: '80px', borderRadius: '50%', border: '3px solid rgba(59, 130, 246, 0.5)' }} />
                </div>
                <Typography
                  component="h1"
                  sx={{
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    color: 'white',
                    mb: 2,
                    maxWidth: 320,
                    mx: 'auto',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <Name address={address} chain={base} fallback="Decisions Explorer" />
                </Typography>
                <p className="text-gray-300">Decisions Explorer</p>
                <Typography sx={{ color: 'gray', fontSize: '0.875rem', mt: 0.5, maxWidth: 320, mx: 'auto', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {address.slice(0, 6)}...{address.slice(-4)}
                </Typography>
              </>
            ) : (
              <>
                <div className="profile-avatar">👤</div>
                <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }} className="text-white mb-2">Decisions Explorer</h1>
                <p className="text-gray-300">Explore interactive stories onchain</p>
                <p className="text-gray-400" style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>Connect your wallet to see your Basename</p>
              </>
            )}
          </div>
        </div>

        {isConnected && address && (
          <div style={{ margin: '2rem 0' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }} className="text-white mb-4">Your Story Progress</h2>
            {stories.map(story => {
              const progress = getStoryProgress(story.id);
              const percent = Math.round(calculateStoryProgress(story, progress));
              let status = 'Not started';
              if (progress) {
                status = percent >= 100 ? 'Completed' : 'In progress';
              }
              return (
                <div key={story.id} className="progress-card" style={{ display: 'flex', gap: '1rem', alignItems: 'center', background: 'rgba(30,41,59,0.8)', borderRadius: '0.5rem', padding: '1rem', marginBottom: '1rem' }}>
                  <img src={story.coverImage} alt={story.title} style={{ width: '80px', height: '60px', borderRadius: '0.5rem', objectFit: 'cover' }} />
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: '600' }} className="text-white">{story.title}</h3>
                    <div style={{ fontSize: '0.875rem', color: '#60a5fa', fontWeight: '500', margin: '0.5rem 0' }}>{status}</div>
                    <div style={{ width: '100%', background: '#222', borderRadius: '0.25rem', height: '8px', margin: '0.5rem 0' }}>
                      <div style={{
                        width: `${percent}%`,
                        background: percent === 100 ? '#22c55e' : '#60a5fa',
                        height: '100%',
                        borderRadius: '0.25rem',
                        transition: 'width 0.3s'
                      }} />
                    </div>
                    <span className="text-gray-400">{percent}% complete</span>
                    {percent === 100 && (
                      <button className="btn btn-secondary" style={{ fontSize: '0.75rem', marginLeft: '1rem' }} onClick={() => {
                        localStorage.removeItem(`storyProgress_${story.id}`);
                        window.location.reload();
                      }}>Reset Progress</button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
