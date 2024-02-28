import { useParams, Link } from "react-router-dom"; 

const ProductDetail = () => {
  const params = useParams();
  return (
    <>
      <h1>Product Details!</h1>
      <p>{ params.productId }</p>
      {/* ✔✔ 상위 페이지로 이동 */}
      <p><Link to=".." relative="path">Back</Link></p>
    </>
  )
}

export default ProductDetail;