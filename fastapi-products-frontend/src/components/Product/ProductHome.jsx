import ProductList from "./ProductList";

const ProductHome = ({ products }) => {
  // Usa un contenedor más grande en pantallas pequeñas y uno más pequeño en pantallas medianas y grandes
  return (
    <div className="w-full container mx-auto px-4 py-6">
      <form
        className="max-w-4xl mx-auto mb-10 p-6 bg-white shadow-lg rounded-xl flex flex-col gap-5"
        onSubmit={async (e) => {
          e.preventDefault();
          const form = e.target;
          const name = form.name.value.trim();
          const description = form.description.value.trim();
          const price = parseFloat(form.price.value);
          const stock = parseInt(form.stock.value, 10);

          if (!name || !description || isNaN(price) || isNaN(stock)) {
            alert("Please fill in all fields correctly.");
            return;
          }

          const response = await fetch("/api/products", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, description, price, stock }),
          });

          if (response.ok) {
            form.reset();
            window.location.reload(); // Or trigger state update
          } else {
            alert("Failed to create product.");
          }
        }}
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

      <ProductList products={products} />
    </div>
  );
};

export default ProductHome;
