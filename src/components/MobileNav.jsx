import { Link, useLocation } from 'react-router-dom';

const MobileNav = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="mobile-nav">
      <div className="mobile-nav-content">
        <Link 
          to="/" 
          className={`mobile-nav-item ${isActive('/') ? 'active' : ''}`}
        >
          <span className="mobile-nav-icon">📚</span>
          <span>Stories</span>
        </Link>
        
        <Link 
          to="/profile" 
          className={`mobile-nav-item ${isActive('/profile') ? 'active' : ''}`}
        >
          <span className="mobile-nav-icon">👤</span>
          <span>Profile</span>
        </Link>
      </div>
    </nav>
  );
};

export default MobileNav; 