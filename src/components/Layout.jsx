import { Outlet } from 'react-router-dom';
import Header from './Header';
import MobileNav from './MobileNav';

const Layout = () => {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Header />
      <div className="container py-8">
        <main className="main-content">
          <Outlet />
        </main>
      </div>
      <MobileNav />
    </div>
  );
};

export default Layout; 