import ProductButtonsHub from "./ProductButtonsHub";

// This component displays a single product item
// It includes the product details and buttons for editing and deleting the product
const ProductItem = ({ product }) => {
  return (
    <li>
      <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
        <div className="flex justify-between items-start gap-6">
          {/* Texto en línea horizontal */}
          <div className="flex gap-8 items-center flex-wrap">
            <h3 className="font-semibold text-lg text-gray-800">
              {product.name}
            </h3>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-blue-700">Price: ${product.price}</p>
            <p className="text-green-700">Stock: {product.stock}</p>
          </div>

          {/* Botones en columna */}
          <div className="flex flex-col gap-2 items-end">
            <ProductButtonsHub product_id={product.id} />
          </div>
        </div>
      </div>
    </li>
  );
};


// This component displays a list of products as an unordered list
// It maps over the products array and renders a ProductItem for each product
const ProductList = ({ products }) => {
  // Usa un contenedor más grande en pantallas pequeñas y uno más pequeño en pantallas medianas y grandes
  return (
    <>
      <h2 className="text-2xl font-bold mb-4 text-center">Product List</h2>

      <ul className="space-y-4">
        {products && products.length > 0 ? (
          products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))
        ) : (
          <li>No products available</li>
        )}
      </ul>
    </>
  );
};

export default ProductList;
