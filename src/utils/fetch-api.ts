import { handleApiError } from "./handle-errors";

export const fetchApi = async <T>(
  url: string,
  options: RequestInit = {}
): Promise<T> => {
  try {
    if (options.body) {
      options.headers = {
        ...options.headers,
        "Content-Type": "application/json",
      };
    }
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(
        `Something went wrong while fetch url ${url} with status ${response.status}`
      );
    }
    return (await response.json()) as T;
  } catch (error) {
    console.error(error);
    throw handleApiError(error);
  }
};
