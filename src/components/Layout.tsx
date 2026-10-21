import { Outlet } from 'react-router';
import Header from './Header';
import Footer from './Footer';

function Layout() {
  return (
    <>
      <Header title="My Blog" />
      <main>
        <Outlet />
      </main>
      <Footer text="2026 · My Blog" />
    </>
  );
}

export default Layout;
