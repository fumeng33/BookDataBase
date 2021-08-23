export async function handleResponse(response) {
  if (response.ok) return response.json();
  if (response.status === 400) {
    const error = await response.text();
    throw new Error(error);
  }
  throw new Error("Network response was not ok.");
}

export function handleError(error) {
  console.error(`API call failed: ${error}`);
  throw error;
}

export function storeTokenOnLocalStorage(response) {
  localStorage.setItem("token", response.token);

  response.name = "Meng Fu";

  delete response.token;

  return response;
}

export function getHeaders() {
  const token = localStorage.getItem("token");
  const headers = new Headers();

  headers.append("content-type", "application/json");
  headers.append("authorization", `bearre ${token}`);

  return headers;
}