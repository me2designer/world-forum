/**
 *
 *  문자열 true, false를 boolean 타입으로 변환
 *
 *  [script 작성 예]
 *  "true".boolean //true
 *  "false".boolean //true
 *  "text".boolean // 에러출력
 *
 */

String.prototype.boolean = function (_console = false) {
  let result;

  if (this.trim() === "true") result = true;
  else if (this.trim() === "false") result = false;
  else {
    result = false;
    _console && console.log(`%c boolean.js %c ture 또는 false 문자만 가능합니다.`, "color:yellow;background:#ffb6c16b", "color:red;");
  }

  return result;
};
