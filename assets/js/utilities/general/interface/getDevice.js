/**
 *
 *  Device, 웹브러우저 정보 가져오기
 *
 */

export function getDevice(_show = true) {
  let type, detail;

  if (navigator.userAgent.match(/android/i)) {
    type = "mo";
    detail = "android";
  } else if (navigator.userAgent.match(/iphone|ipad|ipod/i)) {
    type = "mo";
    detail = "ios";
  } else if (navigator.userAgent.match(/mobile|ip(hone|od)|blackberry|iemobile|kindle|netfront|silk-accelerated|(hpw|web)os|fennec|minimo|opera m(obi|ini)|blazer|dolfin|dolphin|skyfire|zune/i)) {
    type = "mo";
    detail = "";
  } else {
    type = "pc";
    if (navigator.userAgent.match(/edge/i)) detail = "edge";
    else if (navigator.userAgent.match(/whale/i)) detail = "whale";
    else if (navigator.userAgent.match(/chrome/i)) detail = "chrome";
    else if (navigator.userAgent.match(/opera/i)) detail = "opera";
    else if (navigator.userAgent.match(/firefox/i)) detail = "firefox";
    else if (navigator.userAgent.match(/safari/i)) detail = "safari";
    else if (navigator.userAgent.match(/msie|trident/i)) {
      if (navigator.userAgent.match(/msie 6/i)) detail = "ie6";
      else if (navigator.userAgent.match(/msie 7/i)) detail = "ie7";
      else if (navigator.userAgent.match(/msie 8/i)) detail = "ie8";
      else if (navigator.userAgent.match(/msie 9/i)) detail = "ie9";
      else if (navigator.userAgent.match(/msie 10/i)) detail = "ie10";
      else if (navigator.userAgent.match(/rv:11.0/i)) detail = "ie11";
      else detail = "ie";
    } else detail = "";
  }
  return {
    type: type,
    detail: detail,
  };
}

/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/

/**
 *
 *  Add a property to the window object
 *
 */

window.getDevice = getDevice;
