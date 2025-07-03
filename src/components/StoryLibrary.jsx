import { stories } from '../data/stories';

const StoryLibrary = ({ onStorySelect }) => {
  // Only show Uche's Journey
  const ucheStory = stories[0];

  return (
    <div style={{ marginBottom: '2rem' }}>
      <div className="text-center mb-12">
        <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold' }} className="text-white mb-4">
          Welcome to Decisions
        </h2>
        <p className="text-gray-300" style={{ maxWidth: '42rem', margin: '0 auto' }}>
          Experience interactive, onchain choose-your-own-adventure stories. Each story offers unique perspectives and branching narratives based on your choices.
        </p>
      </div>

      <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        {/* Uche's Journey Story Card */}
        <div
          key={ucheStory.id}
          onClick={() => onStorySelect(ucheStory.id)}
          style={{ 
            display: 'block', 
            textDecoration: 'none',
            cursor: 'pointer'
          }}
        >
          <div style={{
            backgroundColor: '#1f2937',
            borderRadius: '0.5rem',
            overflow: 'hidden',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease',
            transform: 'scale(1)',
          }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
             onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
            <div style={{ position: 'relative' }}>
              <img
                src={ucheStory.coverImage}
                alt={ucheStory.title}
                style={{ width: '100%', height: '12rem', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                <span style={{
                  padding: '0.25rem 0.5rem',
                  borderRadius: '9999px',
                  fontSize: '0.75rem',
                  fontWeight: '500',
                  backgroundColor: '#f59e0b',
                  color: '#000'
                }}>
                  {ucheStory.difficulty}
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }} className="text-white mb-2">
                {ucheStory.title}
              </h3>
              <p className="text-gray-400" style={{ fontSize: '0.875rem', marginBottom: '0.75rem' }}>
                {ucheStory.character}
              </p>
              <p className="text-gray-300" style={{ fontSize: '0.875rem', marginBottom: '1rem' }}>
                {ucheStory.description}
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="text-blue-400" style={{ fontSize: '0.875rem' }}>
                  ⏱ {ucheStory.estimatedTime}
                </span>
                <span className="text-blue-300" style={{ fontSize: '0.875rem', fontWeight: '500' }}>
                  Start Story →
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Coming Soon Card */}
        <div style={{
          backgroundColor: '#1e293b',
          borderRadius: '0.5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '18rem',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
          border: '2px dashed #60a5fa',
        }}>
          <span style={{ fontSize: '2rem', color: '#60a5fa', marginBottom: '1rem' }}>🚧</span>
          <h3 style={{ color: '#60a5fa', fontWeight: 'bold', fontSize: '1.25rem', marginBottom: '0.5rem' }}>
            More Stories Coming Soon
          </h3>
          <button
            className="btn btn-primary"
            style={{ marginTop: '1rem', fontSize: '0.875rem', padding: '0.5rem 1.5rem' }}
            disabled
          >
            Coming Soon
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoryLibrary; 