/**
 *
 * 숫자와 문자에 대한 내림차순 정렬
 *
 */

Array.prototype.sortDescending = function () {
  return this.sort((a, b) => {
    const aString = a.toString();
    const bString = b.toString();

    if (typeof a === "number" && typeof b === "number") {
      return b - a;
    } else if (typeof a === "number") {
      return 1;
    } else if (typeof b === "number") {
      return -1;
    } else {
      if (aString.length === bString.length) {
        return bString.localeCompare(aString);
      } else {
        return bString.length - aString.length;
      }
    }
  });
};
