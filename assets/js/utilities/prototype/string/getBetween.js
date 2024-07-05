/**
 * 단어와 단어 사이 추출하기
 *
 * [script 작성 예]
 * //양쪽 끝 공백제된 상태로 추출하기
 * let result = "시작문자    문자추출    끝나는문자".getBetween("시작문자", "끝나는문자");
 * console.log(result) // "문자추출"
 *
 * //양쪽 끝 공백 포함 후 추출하기
 * let result = "시작문자    문자추출    끝나는문자".getBetween("시작문자", "끝나는문자", false);
 * console.log(result) // "    문자추출    "
 *
 */

// prettier-ignore
String.prototype.getBetween = function (_startText, _endText, _trim = true) {
  const startIdx = (
    this.indexOf(_startText) === -1 ? undefined :
    this.indexOf(_startText) + _startText.length
  )
  const endIdx = (
    this.lastIndexOf(_endText) === -1 ? undefined :
    this.lastIndexOf(_endText)
  )
  const result = startIdx >= endIdx ? undefined : this.substring(startIdx, endIdx)

  return _trim ? result?.trim() : result;
};
