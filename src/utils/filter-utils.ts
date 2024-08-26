export const serializeFilters = (filters: {
  [key: string]: string;
}): string => {
  return new URLSearchParams(filters).toString();
};

export const parseFilters = (
  filterParam: string | null
): { [key: string]: string } => {
  return filterParam
    ? Object.fromEntries(new URLSearchParams(filterParam))
    : {};
};
