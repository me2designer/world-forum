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
      center: new kakao.maps.LatLng(37.526652903082386, 126.92715852659192),
      level: 3,
    };

    let map = new kakao.maps.Map($map, options);
    map.setDraggable(false);
    map.setZoomable(false);

    // 지도를 클릭한 위치에 표출할 마커입니다
    var marker = new kakao.maps.Marker({
      // 지도 중심좌표에 마커를 생성합니다
      position: map.getCenter(),
    });
    // 지도에 마커를 표시합니다
    marker.setMap(map);
  });
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
