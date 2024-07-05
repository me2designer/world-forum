/**
 *
 * margin, padding, border 제외한 width값 가져오기
 *
 */

Element.prototype.insideWidth = function () {
  return (
    this.offsetWidth -
    parseFloat(getComputedStyle(this, null).getPropertyValue("padding-left")) -
    parseFloat(getComputedStyle(this, null).getPropertyValue("padding-right"))
  );
};
