import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <h1>#VANLIFE</h1>
      <Link to="/about">About</Link>
      <Link to="/products">Vans</Link>
    </nav>
  );
};
export default Header;
