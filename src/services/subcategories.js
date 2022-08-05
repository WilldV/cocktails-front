import { buildParams } from "../utils";
import { fetchApi } from "./fetchApi";

export function listSubCategories(query) {
  return fetchApi("GET", "/subcategories?" + buildParams(query));
}

export function getSubCategoryById(id) {
  return fetchApi("GET", `/subcategories/${id}`);
}

export function createSubCategory(body) {
  return fetchApi("POST", `/subcategories`, body);
}

export function updateSubCategory(id, body) {
  return fetchApi("PUT", `/subcategories/${id}`, body);
}

export function deleteSubCategory(id) {
  return fetchApi("DELETE", `/subcategories/${id}`);
}
