/**
 *
 * trigger 이벤트
 *
 */

Element.prototype.trigger = function (_event) {
  this.dispatchEvent(new Event(_event, { bubbles: true }));
};
