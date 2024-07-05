/**
 *
 * [class="className"] 요소에 className 있는지 true/flase 반환
 *
 * @param {string} className
 * @returns
 */

Element.prototype.hasClass = function (className) {
  if (!this || !this.classList) {
    return false;
  }
  return this.classList.contains(className);
};
