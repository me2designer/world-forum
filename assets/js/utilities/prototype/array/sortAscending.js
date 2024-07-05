/**
 *
 * 숫자와 문자에 대한 오름차순 정렬
 *
 */

Array.prototype.sortAscending = function () {
  return this.sort((a, b) => {
    const aString = a.toString();
    const bString = b.toString();

    if (typeof a === "number" && typeof b === "number") {
      return a - b;
    } else if (typeof a === "number") {
      return -1;
    } else if (typeof b === "number") {
      return 1;
    } else {
      if (aString.length === bString.length) {
        return aString.localeCompare(bString);
      } else {
        return aString.length - bString.length;
      }
    }
  });
};
