import { fetchApi } from "./fetchApi";

export function listCategories(query) {
  return fetchApi("GET", "/categories?" + new URLSearchParams(query));
}

export function getCategoryById(id) {
  return fetchApi("GET", `/categories/${id}`);
}

export function createCategory(body) {
  return fetchApi("POST", `/categories`, body);
}

export function updateCategory(id, body) {
  return fetchApi("PUT", `/categories/${id}`, body);
}

export function deleteCategory(id) {
  return fetchApi("DELETE", `/categories/${id}`);
}
