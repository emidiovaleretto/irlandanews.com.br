export default async function fetchAPI(key) {
  const request = await fetch(key);
  const response = await request.json();
  return response;
}
