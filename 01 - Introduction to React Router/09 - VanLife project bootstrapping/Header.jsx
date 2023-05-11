import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>#VANLIFE</h1>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/products">Vans</Link>
      </nav>
    </header>
  );
};
export default Header;
