import { Link, useLocation } from 'react-router-dom';
import OnchainKitWallet from './OnchainKitWallet';

const Header = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="nav-header">
      <div className="container">
        <div className="nav-content">
          <Link to="/" className="nav-logo">
            Decisions
          </Link>
          
          <nav className="nav-links">
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
            >
              Stories
            </Link>
            <Link 
              to="/profile" 
              className={`nav-link ${isActive('/profile') ? 'active' : ''}`}
            >
              Profile
            </Link>
          </nav>
          
          <div className="nav-wallet">
            <OnchainKitWallet />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 