'use strict';

exports.getDigitsCount = (value) => {
  return Math.floor(Math.log10(Math.abs(value))) + 1;
};
