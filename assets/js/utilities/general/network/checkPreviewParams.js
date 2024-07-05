/**
 *
 *  event : "preview" 파라미터 사용시 콜백
 *
 */

export const checkPreviewParams = (_value, _callback) => {
  const params = new URLSearchParams(location.search);
  const values = params.getAll("preview"); // 'preview' 파라미터의 모든 값을 배열로 가져옵니다.

  // 'preview' 파라미터 중 하나라도 _value와 일치하는지 확인합니다.
  const isMatch = values.includes(_value);
  if (isMatch && typeof _callback === "function") {
    _callback(); // 일치하는 경우, 콜백 함수 실행
  }

  return isMatch; // 일치 여부를 반환합니다.
};

/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/

/**
 *
 *  Add a property to the window object
 *
 */

window.checkPreviewParams = checkPreviewParams;