/**
 *
 * 이미지 URL 없으면 .thumbail-box 제거
 *
 */

export const removeThumbnailBox = (_closestName = ".thumbail-box") => {
  event.target.closest(_closestName).remove();
};

/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/

/**
 *
 *  Add a property to the window object
 *
 */

window.removeThumbnailBox = removeThumbnailBox;
