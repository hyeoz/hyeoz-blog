export async function fetcher(url: string, options: RequestInit = {}) {
  let response: Response;

  if (!options) {
    response = await fetch(url);
  } else {
    response = await fetch(url, options);
  }

  return await response.json();
}
