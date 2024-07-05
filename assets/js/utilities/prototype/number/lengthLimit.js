/**
 *
 * 오버되는 자릿수 제한
 *
 */

Number.prototype.lengthLimit = function ($limit) {
  var txtNum = "" + this;
  var result = txtNum;
  if (txtNum.length > $limit) {
    result = txtNum.substr(0, txtNum.length - $limit);
  }
  return parseInt(result);
};