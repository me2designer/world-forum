/**
 *
 *  객체인지 확인
 *
 *  [script 작성 예]
 *  Object.isObject({ firstName: "Mike" }), // true
 *  Object.isObject({}), // true
 *  Object.isObject([2, 3]), // false
 *  Object.isObject(null), // false
 *  Object.isObject(() => true) // false
 *
 */

Object.isObject = function (value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
};
