/**
 *
 * URL에서 특정 파라미터 값을 추출.
 *
 * 이 함수는 현재 페이지의 URL에서 특정 쿼리 파라미터의 값들을 검색하여 반환합니다.
 * 파라미터가 여러 번 나타나면, 값들은 배열로 반환됩니다.
 * 파라미터가 한 번만 나타나면, 값은 문자열로 반환됩니다.
 *
 * 사용 예시:
 * // URL: https://example.com/?param1=value1&param2=value2&param1=value3
 * const param1Values = getUrlParameterValues("param1");
 * console.log(param1Values); // ["value1", "value3"]
 *
 * const param2Values = getUrlParameterValues("param2");
 * console.log(param2Values); // "value2"
 *
 * @param {string} parameterName - 검색할 파라미터의 이름.
 * @returns {string|string[]|undefined} - 파라미터의 값(들). 값이 없으면 undefined, 여러 개면 배열로 반환됩니다.
 *
 */

export const getUrlParameterValues = (_parameterName) => {
  // 현재 페이지의 URL에서 쿼리 파라미터를 분석
  const params = new URLSearchParams(location.search);

  // 특정 파라미터 이름으로 검색하여 값을 배열로 저장
  const values = [];
  params.forEach((_value, _key) => {
    if (_key === _parameterName) {
      values.push(_value);
    }
  });

  // 값이 없으면 undefined를 반환
  if (values.length === 0) return undefined;

  // 값이 한 개면 문자열로 반환하고, 여러 개면 배열로 반환
  return values.length === 1 ? values[0] : values;
};

/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/

/**
 *
 * window 객체에 속성 추가
 *
 */

window.getUrlParameterValues = getUrlParameterValues;
