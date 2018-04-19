import dateFormat from 'dateformat';

export const toJsDate = (parseDate = '') =>
  new Date(parseInt(parseDate.substr(6), 10));

export const toSimpleDateFormat = date =>
  dateFormat(date, 'dddd dd mmm yyyy');
