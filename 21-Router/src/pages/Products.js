import { Link } from "react-router-dom";

const PRODUCTS = [
  {id: 'p1', title: 'Product1'},
  {id: 'p2', title: 'Product2'},
  {id: 'p3', title: 'Product3'},
];

const ProductsPage = () => {
  return (
    <>
      <h1>The Products Page</h1>
      <ul>
        {
          PRODUCTS.map(prod => {
            return (
              <li key={prod.id}>
                <Link to={prod.id}>{ prod.title }</Link>
              </li>
            )
          })
        }
        <li></li>
      </ul>
    </>
  )
}

export default ProductsPage;