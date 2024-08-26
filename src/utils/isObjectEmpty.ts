export const isObjectEmpty = (obj: Record<string, unknown>) => {
  if (JSON.stringify(obj) === "{}") return false;
  return true;
};
