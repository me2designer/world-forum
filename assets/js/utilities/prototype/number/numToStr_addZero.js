/**
 *
 * 10이하 0붙임
 *
 */

Number.prototype.numToStr_addZero = function ($len) {
  if (!$len) $len = 2;
  var result = String(this);

  if (result.length < $len) {
    var len = $len - result.length;
    for (var Loop1 = 0; Loop1 < len; ++Loop1) {
      result = "0" + result;
    }
  }

  return result;
  /*
      if( this < 10 ) result = "0" + result;
      return result;
      */
};
