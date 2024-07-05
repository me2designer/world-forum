/**
 * 출처) https://github.com/adamwuss/getEventListeners
 *
 * Element의 addEventListener, removeEventListener의 앞에 언더바(_)를 붙여 재정의 하고,
 * 기존 함수명에는 새롭게 정의된 함수를 붙임
 * 기존 함수명으로 새롭게 정의하는 함수에서는 언더바를 붙인 기존 함수를 호출하고,
 * 이벤트 추적이 가능하도록 eventListenerList 배열을 만들어 저장
 *
 * 해당 프로토타입을 사용함으로써 추가로 사용 가능한 함수
 * Element.getEventListeners() - Element에 등록된 모든 event를 자바스크립트로 추적 가능
 * Element.getEventListeners("click") - Element에 등록된 클릭 event를 자바스크립트로 추적 가능 (매개변수명 변경 시 해당하는 event 추적)
 * Element.clearEventListeners() - Element에 등록된 모든 event를 삭제
 *
 */

const elementPrototype = Element.prototype;

// save the original methods before overwriting them
elementPrototype._addEventListener = Element.prototype.addEventListener;
elementPrototype._removeEventListener = Element.prototype.removeEventListener;

elementPrototype.addEventListener = function (type, listener, useCapture = false) {
  // declare listener
  this._addEventListener(type, listener, useCapture);

  if (!this.eventListenerList) this.eventListenerList = {};
  if (!this.eventListenerList[type]) this.eventListenerList[type] = [];

  // add listener to  event tracking list
  this.eventListenerList[type].push({ type, listener, useCapture });
};

elementPrototype.removeEventListener = function (type, listener, useCapture = false) {
  // remove listener
  this._removeEventListener(type, listener, useCapture);

  if (!this.eventListenerList) this.eventListenerList = {};
  if (!this.eventListenerList[type]) this.eventListenerList[type] = [];

  // Find the event in the list, If a listener is registered twice, one
  // with capture and one without, remove each one separately. Removal of
  // a capturing listener does not affect a non-capturing version of the
  // same listener, and vice versa.
  for (let i = 0; i < this.eventListenerList[type].length; i++) {
    if (this.eventListenerList[type][i].listener === listener && this.eventListenerList[type][i].useCapture === useCapture) {
      this.eventListenerList[type].splice(i, 1);
      break;
    }
  }
  // if no more events of the removed event type are left,remove the group
  if (this.eventListenerList[type].length === 0) delete this.eventListenerList[type];
};

elementPrototype.getEventListeners = function (type) {
  if (!this.eventListenerList) this.eventListenerList = {};

  // return reqested listeners type or all them
  if (type === undefined) return this.eventListenerList;

  return this.eventListenerList[type];
};

elementPrototype.clearEventListeners = function (a) {
  if (!this.eventListenerList) this.eventListenerList = {};
  if (a === undefined) {
    for (const x in this.getEventListeners()) {
      this.clearEventListeners(x);
    }

    return;
  }
  const el = this.getEventListeners(a);

  if (el === undefined) return;

  for (let i = el.length - 1; i >= 0; --i) {
    const ev = el[i];
    this.removeEventListener(a, ev.listener, ev.useCapture);
  }
};
