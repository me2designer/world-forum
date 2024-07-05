/**
 *
 * index 값 반환
 *
 */

Element.prototype.index = function () {
  return [...this.parentElement.children].indexOf(this);
};
