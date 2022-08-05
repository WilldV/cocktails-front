import { fetchApi } from "./fetchApi";
import { buildParams } from "../utils";
export function listIngredients(query) {
  return fetchApi("GET", "/ingredients?" + buildParams(query));
}

export function getIngredientById(id) {
  return fetchApi("GET", `/ingredients/${id}`);
}

export function createIngredient(body) {
  return fetchApi("POST", `/ingredients`, body);
}

export function updateIngredient(id, body) {
  return fetchApi("PUT", `/ingredients/${id}`, body);
}

export function deleteIngredient(id) {
  return fetchApi("DELETE", `/ingredients/${id}`);
}
