'use strict';

exports.getDigitsCount = (value) => {
  if (!Number.isInteger(value)) {
    throw new Error(`Non integer values are not supported.`);
  }
  return Math.floor(Math.log10(Math.abs(value))) + 1;
};
