/**
 *
 * K,M단위 추가 및 소숫점 표기 추가
 *
 */

Number.prototype.lengthLimitCommaPoint = function ($precision) {
  let originNum = 0;
  let floatNum = 0;
  let result = '';

  if (this >= 1000) {
    originNum = this / 1000;
    floatNum = String(originNum).split(".")[1] ? String(originNum).split(".")[1].substr(0, $precision) : 0;
    result = `${Math.floor(originNum)}.${floatNum}K`;

    if(originNum >= 1000) {
      originNum = originNum / 1000;
      floatNum = String(originNum).split(".")[1] ? String(originNum).split(".")[1].substr(0, $precision) : 0;
      result = `${Math.floor(originNum)}.${floatNum}M`;
    }
  } else result = String(this).addComma();


  return result;
}