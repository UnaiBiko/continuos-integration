const capitalize = (text) => {
  const firstLetterInUpper = text.charAt(0).toUpperCase();

  return `${firstLetterInUpper}${text.slice(1)}`;
};

export const stringUtils = {
  capitalize,
};
