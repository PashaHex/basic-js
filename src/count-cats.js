const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let resultArr = matrix.map((curMatrix) => curMatrix.filter((item) => item === '^^'));
  return resultArr.flat().length;
  
};
