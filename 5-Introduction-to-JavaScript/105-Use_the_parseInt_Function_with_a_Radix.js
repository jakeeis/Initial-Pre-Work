//In this exercise I learned to convert a string representing a number in any base
//(such as binary or hexidecimal) into a base 10 integer

function convertToInteger(str) {
  return parseInt(str, 2);
}

convertToInteger("10011");
