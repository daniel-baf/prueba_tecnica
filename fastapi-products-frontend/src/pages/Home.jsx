import { useContext } from "react";
import { ProductContext } from "../context/ProductContext.jsx";
import ProductHome from "../components/Product/ProductHome.jsx";

function Home() {
  const { products } = useContext(ProductContext);
  return (
    <div>
      <ProductHome products={products} />
    </div>
  );
}

export default Home;