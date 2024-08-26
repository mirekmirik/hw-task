export const transformDate = (date: string) => {
  const [day, time] = date.split("T");
  return { day, time };
};
