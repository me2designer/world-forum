/**********************************
 * Setting
 **********************************/

/**********************************
 * Variables
 **********************************/

/**********************************
 * Method
 **********************************/
{
  /**
   *
   *  depth : 포럼소개 > 오시는 길
   *  event : 카카오 지도 API 삽입
   *
   */

  const $map = document.querySelector(".section-contact-body .map"); //지도를 담을 영역의 DOM 레퍼런스

  window.kakao.maps.load(() => {
    let options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };

    let map = new kakao.maps.Map($map, options);
    map.setDraggable(false);
    map.setZoomable(false);
  });
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
