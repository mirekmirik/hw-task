type ApiError = string;

export const handleApiError = (error: unknown): ApiError => {
  const message = error instanceof Error ? error.message : String(error);
  console.error(error);
  return message;
};
