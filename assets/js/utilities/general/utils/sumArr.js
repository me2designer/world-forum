/**
 *
 * sumArr
 *
 */

window.sumArr = function (arr) {
  if (Array.isArray(arr) === false) return false;

  var result = arr.reduce(function add(a, b) {
    return parseInt(a) + (parseInt(b) || 0);
  }, 0);

  return result;
};
