import ProductHome from "../components/Product/ProductHome.jsx";

import { ProductProvider } from "../context/ProductContext.jsx";

function Home() {
  return (
    <div>
      {/* PRODUCT COMPONENT */}
      <ProductProvider>
        <ProductHome/>
      </ProductProvider>
    </div>
  );
}

export default Home;
