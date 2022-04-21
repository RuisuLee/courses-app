export const getFormattedDate = (inputDate: string): string => {
  const formattedDate = inputDate.replace(/\//g, '.');
  return formattedDate;
};
