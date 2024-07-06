/**
 *
 * 대체 이미지의 설정
 *
 */

export const handleImageError = (_$img, sizeWidth = 200, sizeHeight = 280) => {
  const altText = "이미지를 찾을 수 없습니다.";

  _$img.src = `/assets/img/noimage/noimage_${sizeWidth}x${sizeHeight}.jpg`;
  _$img.alt = altText;
  _$img.ariaHidden = true;
  _$img.style.width = "100%";
  _$img.style.height = "auto";
  _$img.style.maxWidth = "unset";
  _$img.style.maxHeight = "unset";
};

/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/

/**
 *
 *  Add a property to the window object
 *
 */

window.handleImageError = handleImageError;
