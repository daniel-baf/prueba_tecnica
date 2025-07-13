import { createContext, useEffect, useState } from "react";
import {
  fetchDeleteProduct,
  fetchProducts,
  fetchUpdateProduct,
} from "../services/api";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    try {
      const data = await fetchProducts();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const response = await fetchDeleteProduct(id);
      if (!response) {
        throw new Error("Failed to delete product");
      }
      setProducts((prev) => prev.filter((p) => p.id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const updateProduct = (id, updatedData) => {
    const response = fetchUpdateProduct(id, updatedData);
    if (!response) {
      throw new Error("Failed to update product");
    }
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id ? { ...product, ...updatedData } : product
      )
    );
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{ products, setProducts, deleteProduct, updateProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};
