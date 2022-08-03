export async function fetchApi(method, path, body) {
  const BASE_URL = process.env.REACT_APP_API_BASE_URL;
  return fetch(`${BASE_URL}${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  }).then((response) => response.json());
}
