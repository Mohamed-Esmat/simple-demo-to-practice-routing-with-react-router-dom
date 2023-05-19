import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate('/products')
  }
  return (
    <>
      {/* <MainNavigation /> */}
      <h1>My home Page</h1>
      <p>Go to <Link to='/products'>the list of products </Link></p>
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </>
  );
};

export default Home;
