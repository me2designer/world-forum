/**
 *
 *  body scroll lock/unlock
 *
 *  [script 작성 예]
 *  // body 스크롤을 막을 때는
 *  window.lockBody();
 *
 *  // body 스크롤을 풀 때는
 *  window.unlockBody();
 *
 */

let lockBody_scrollT;

window.lockBody = function () {
  const $wrap = document.querySelector("#wrap");
  const style = getComputedStyle(document.documentElement);
  const pl = style.getPropertyValue("--webkit-scrollbar");
  const $body = document.querySelector("body");
  const hasScrollBar = $body.scrollHeight > $body.clientHeight;

  lockBody_scrollT = window.pageYOffset;
  $wrap.style.position = "fixed";
  $wrap.style.top = -lockBody_scrollT + "px";
  $wrap.style.paddingRight = hasScrollBar ? (pl ? pl : false) : false;
};

window.unlockBody = function () {
  const $wrap = document.querySelector("#wrap");

  $wrap.style.position = "";
  $wrap.style.top = "";
  $wrap.style.paddingRight = "";

  window.scrollTo(0, lockBody_scrollT);
  window.setTimeout(function () {
    lockBody_scrollT = null;
  }, 0);
};
