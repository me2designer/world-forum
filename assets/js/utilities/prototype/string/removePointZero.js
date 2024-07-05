/**
 *
 * 소숫점 뒤 숫자가 0인경우 소숫점 및 소숫점 뒤 숫자 제거
 * 매개변수에 입력받은 숫자 = 소숫점 자릿수 (기본값 1)
 *
 * "142.0".removePointZero() => "142"
 * "142.0".removePointZero(1) => "142"
 * "142.0".removePointZero(2) => "142.0"
 * "142.00".removePointZero(2) => "142"
 * "142.00".removePointZero(1) => "1420"
 * "142.00".removePointZero(3) => "142.00"
 */

String.prototype.removePointZero = function (_precision = 1) {
  let param = this;
  let remove = "0";
  if (_precision > 1) {
    for (let i = 1; i < _precision; i++) {
      remove += "0";
    }
  }
  let exr = new RegExp(`\\.${remove}`, "g");

  return param.replace(exr, "");
};
