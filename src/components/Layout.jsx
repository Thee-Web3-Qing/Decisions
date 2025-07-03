import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Header />
      <div className="container py-8">
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout; 