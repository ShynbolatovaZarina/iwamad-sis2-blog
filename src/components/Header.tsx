import { NavLink } from 'react-router';
import logo from '../assets/logo.svg';

type HeaderProps = {
  title: string;
};

function Header({ title }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="site-header__brand">
        <img src={logo} alt="" width={32} height={32} />
        <h1>{title}</h1>
      </div>
      <nav className="site-nav">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}

export default Header;
