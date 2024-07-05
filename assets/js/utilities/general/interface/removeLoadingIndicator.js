/**********************************
 * Settings
 **********************************/
import "../../prototype/element/siblings.js" // 형제 선택자

/**********************************
 * Method
 **********************************/
/**
 *
 * removeLoadingIndicator
 *
 * 이미지가 로드된 후 로딩 인디케이터를 제거
 *
 * @param {HTMLElement} _$img - 로드된 이미지 요소
 * @param {string} _$removeElementName - 제거할 요소의 클래스 이름 (기본값: ".swiper-lazy-preloader")
 *
 */

export const removeLoadingIndicator = (_$img, _$removeElementName = ".swiper-lazy-preloader") => {
  const $removeElements = _$img.siblings(_$removeElementName);

  // 형제 요소 중 해당 클래스명을 가진 요소가 있는지 확인하고, 있을 경우에만 제거
  if ($removeElements && $removeElements.length > 0) {
    $removeElements.forEach((_$removeElement) => {
      _$removeElement.remove();
    });
  }

  // 이벤트 핸들러 제거 - drag시 무한 호출 문제 해결
  _$img.removeAttribute("onload");
  _$img.removeAttribute("onerror");
};

/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/

/**
 *
 *  Add a property to the window object
 *
 */

window.removeLoadingIndicator = removeLoadingIndicator;
