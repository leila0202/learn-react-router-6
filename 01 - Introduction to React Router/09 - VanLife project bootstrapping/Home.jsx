import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div id="intro-page">
      <div id="intro-content">
        <h2>You got the travel plans, we got the travel vans.</h2>
        <Link to="/vans">Find your van</Link>
      </div>
    </div>
  );
};
export default Home;
