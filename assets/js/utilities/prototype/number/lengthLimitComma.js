/**
 *
 * 오버되는 자릿수 K/M으로 대체 및 3자리마다 콤마(,) 추가
 *
 */

Number.prototype.lengthLimitComma = function ($limit) {
  // $limit : 오버되는 자릿수
  var result = 0;
  var arrLimit = ["", "k", "M", "G", "T", "P", "E", "Z", "Y"];
  var strNum = String(this);
  var spelIdx = Math.ceil((strNum.length - $limit) / 3);
  strNum = strNum.addComma();
  if (this > 0 && strNum.length > 4) result = strNum.substr(0, strNum.length - 4 * spelIdx) + arrLimit[spelIdx];
  else result = this;
  return result;
};

