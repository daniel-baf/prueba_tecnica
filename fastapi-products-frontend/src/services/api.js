const API_BASE_URL = "http://localhost:8000/api/alpha";

export async function fetchProducts() {
  const response = await fetch(`${API_BASE_URL}/products/`);
  return response.json();
}

export async function fetchFindProduct(id) {
  if (!id) {
    throw new Error("Product ID is required");
  }
  const response = await fetch(`${API_BASE_URL}/find/${id}/`);
  return response.json();
}

export async function fetchCreateProduct(data) {
  if (!data) {
    throw new Error("Product data is required");
  }
  const response = await fetch(`${API_BASE_URL}/create/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

export async function fetchUpdateProduct(id, data) {
  if (!id || !data) {
    throw new Error("Product ID and data are required");
  }
  const response = await fetch(`${API_BASE_URL}/products/${id}/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

export async function fetchDeleteProduct(id) {
  if (!id || typeof id !== "number") {
    throw new Error("Product ID is required");
  }
  const response = await fetch(`${API_BASE_URL}/products/${id}/`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete product");
  }
  return response.json();
}
