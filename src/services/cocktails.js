import { buildParams } from "../utils";
import { fetchApi } from "./fetchApi";

export function listCocktails(query) {
  return fetchApi("GET", "/cocktails?" + buildParams(query));
}

export function getCocktailById(id, query) {
  return fetchApi("GET", `/cocktails/${id}?` + buildParams(query));
}

export function createCocktail(body) {
  return fetchApi("POST", `/cocktails`, body);
}

export function updateCocktail(id, body) {
  return fetchApi("PUT", `/cocktails/${id}`, body);
}

export function deleteCocktail(id) {
  return fetchApi("DELETE", `/cocktails/${id}`);
}
