/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  /**
   *
   * wrapper is ready
   *
   */
  const $wrap = document.querySelector("#wrap");
  let isState = false;
  $wrap.style.opacity = 1;
  $wrap.style.visibility = "visible";
  switch (window.getDevice().detail) {
    case "safari":
    case "ios":
      // window.toggleLoadingWrap(false);
      break;
    default:
      window.addEventListener("load", () => {
        // window.toggleLoadingWrap(false);
        isState = true;
      });
      setTimeout(() => {
        if (isState === false) {
          // window.toggleLoadingWrap(false);
          console.log(`%c common.js %c 리소스가 정상적으로 다운로드 않거나, 지연시간이 3초를 초과했습니다.`, "color:yellow;background:#ffb6c16b", "color:red;");
        }
      }, 3000);
      break;
  }
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  /**
   *
   *  Device 체크 (custom data attributes)
   *
   */

  const $wrap = document.querySelector("#wrap");

  $wrap.dataset.targetDevice = window.getDevice().type;
  $wrap.dataset.deviceDetail = window.getDevice().detail;
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
