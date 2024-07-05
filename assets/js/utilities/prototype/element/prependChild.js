/**
 *
 * 지정한 요소 안에서 맨 앞에 노드(객체)를 추가
 *
 * [script 작성 예]
 * document.querySelector("#wrap").prependChild(node 객체);
 *
 */

Element.prototype.prependChild = function (_nodeObject) {
  if (!(_nodeObject instanceof Node)) {
    throw new Error("The provided parameter is not a Node instance.");
  }

  if (this.firstChild) {
    this.insertBefore(_nodeObject, this.firstChild);
  } else {
    this.appendChild(_nodeObject);
  }
};
