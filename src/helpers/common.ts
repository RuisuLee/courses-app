export const isSubStrInString = (str: string, subStr: string): boolean => {
  return str.toLowerCase().indexOf(subStr.toLowerCase()) > -1;
};
