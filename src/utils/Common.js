export const toJsDate = (parseDate = '') =>
  new Date(parseInt(parseDate.substr(6), 10));

export default toJsDate;
