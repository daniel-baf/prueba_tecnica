import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import { useState } from "react";

function EditButton({ onClick, product_id }) {
  const [isModalOpen, setIsModalOpen] = useState(false); // to display or hide the modal
  const [editValues, setEditValues] = useState({
    // tmp values to edit in the modal
    name: "",
    price: "",
    description: "",
    stock: 0,
  });

  // the products & functions in the context, so keep the hook running automatically
  const { products, updateProduct } = useContext(ProductContext);
  const product = products.find((p) => p.id === product_id);

  // display the modal, update the state + set the new value to edit
  const onDisplayEditModal = () => {
    setEditValues({
      name: product?.name || "",
      price: product?.price || "",
      description: product?.description || "",
      stock: product?.stock || 0,
    });
    setIsModalOpen(true);
  };

  // handle the change in the input fields
  // do not alter the original product object, just the state of the modal (html)
  const handleChange = (e) => {
    const { name, value } = e.target; // input names
    setEditValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // call the context on click to change the context on all components
  // and close the modal
  const handleSubmit = (e) => {
    e.preventDefault();
    updateProduct(product_id, editValues);
    setIsModalOpen(false);
  };

  
  return (
    <>
      {/* modal */}

      {isModalOpen && (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm px-4">
            <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-lg animate-fade-in">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                Edit Product
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={editValues.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  />
                </div>

                <div className="flex items-center gap-4">
                  <div>
                    <label
                      className="block text-sm font-medium text-gray-700 mb-1"
                      htmlFor="price"
                    >
                      Price
                    </label>
                    <input
                      id="price"
                      name="price"
                      type="number"
                      step="0.01"
                      value={editValues.price}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      required
                    />
                  </div>

                  <div>
                    <label
                      className="block text-sm font-medium text-gray-700 mb-1"
                      htmlFor="stock"
                    >
                      Price
                    </label>
                    <input
                      id="stock"
                      name="stock"
                      type="number"
                      step="0.01"
                      value={editValues.stock}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                    htmlFor="description"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={editValues.description}
                    onChange={handleChange}
                    rows={3}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                  ></textarea>
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}

      {/* button */}
      <button
        onClick={onDisplayEditModal}
        className="flex items-center gap-1 px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600 transition"
      >
        <PencilSquareIcon className="h-4 w-4" />
        Editar
      </button>
    </>
  );
}

function DeleteButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-1 px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600 transition"
    >
      <TrashIcon className="h-4 w-4" />
      Borrar
    </button>
  );
}

export default function ProductButtonsHub({ product_id }) {
  const { deleteProduct, updateProduct } = useContext(ProductContext);

  return (
    <div className="flex justify-center mt-2 gap-4">
      <EditButton onClick={updateProduct} product_id={product_id} />
      <DeleteButton onClick={() => deleteProduct(product_id)} />
    </div>
  );
}
