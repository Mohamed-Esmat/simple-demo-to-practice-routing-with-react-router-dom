import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const PRODUCTS = [
  {id: 'p1', title: 'Product 1'},
  {id: 'p2', title: 'Product 2'},
  {id: 'p3', title: 'Product 3'}
]

const ProductsPage = () => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate('/')
  }

  return (
    <>
      <h1>The Products Page!</h1>
      <p>This is the products page. <Link to='/'>back to home</Link></p>
      <ul>
        {PRODUCTS.map((product) => {
          return (
            <li key={product.id} ><Link to={`/products/${product.id}`}>{product.title }</Link></li>
          )
        })}
      </ul>
      <p>
        <button onClick={navigateHandler}>
          &larr; Navigate back
        </button>
      </p>
    </>
  );
};

export default ProductsPage;
