import { createContext, useEffect, useState } from "react";
import {
  fetchCreateProduct,
  fetchDeleteProduct,
  fetchProducts,
  fetchUpdateProduct,
} from "../services/api";

export const ProductContext = createContext(); // context for the provider

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]); // local reference to products

  // loads products in the API and sets the state
  // this will be called when the component mounts
  const loadProducts = async () => {
    try {
      const data = await fetchProducts();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // delete a product by id
  // this will call the API and update the state
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

  // update a product by id
  // this will call the API and update the state
  // it will merge the updated data with the existing product
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

  // create a new product
  // this will call the API and update the state
  // it will add the new product to the existing products array
  // and return the created product
  // this is used in the ProductHome component to add a new product
  const createProduct = async (newProduct) => {
    const response = await fetchCreateProduct(newProduct);
    if (!response) {
      throw new Error("Failed to create product");
    }
    setProducts((prev) => [...prev, response]);
  };


  // hook to load products when the component mounts
  // this will call the loadProducts function to fetch the products from the API
  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        deleteProduct,
        updateProduct,
        createProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
