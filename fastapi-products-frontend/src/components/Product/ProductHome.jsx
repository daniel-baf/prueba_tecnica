import { useContext } from "react";
import ProductList from "./ProductList";
import { ProductContext } from "../../context/ProductContext";

const ProductHome = () => {
  const { createProduct } = useContext(ProductContext);
  const { products } = useContext(ProductContext);

  // on click, extract the values from the form, must be a better way to 2 way bind the form, but idk rn
  // then call the context to create the product and the hook will update the products automatically
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newProduct = {
      name: formData.get("name"),
      description: formData.get("description"),
      price: parseFloat(formData.get("price")),
      stock: parseInt(formData.get("stock"), 10),
    };
    // Call the createProduct function from context to add the new product
    const response = await createProduct(newProduct);
    if (!response) {
      console.error("Failed to create product");
      return;
    }
    e.target.reset(); // Reset the form after submission
  };

  // HTML
  return (
    <div className="w-full container mx-auto px-4 py-6">
      <form
        className="max-w-4xl mx-auto mb-10 p-6 bg-white shadow-lg rounded-xl flex flex-col gap-5"
        onSubmit={onSubmit}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Add New Product</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="name"
            type="text"
            placeholder="Product Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            name="description"
            type="text"
            placeholder="Description"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            name="price"
            type="number"
            step="0.01"
            placeholder="Price"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            name="stock"
            type="number"
            min="0"
            placeholder="Stock"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="flex justify-end mt-4">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Add Product
          </button>
        </div>
      </form>

      <hr className="my-4 border-t-2 border-gray-200" />
      {/* component */}
      <ProductList products={products} />
    </div>
  );
};

export default ProductHome;
