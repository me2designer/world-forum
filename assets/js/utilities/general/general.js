/**********************************
 * Utility Functions
 * 문자열 및 배열 관련 유틸리티 함수
 **********************************/

// 문자열에서 숫자를 추출하여 반환하고, 유효한 숫자가 없으면 0을 반환
import "./utils/getNum.js";

// 배열의 요소를 모두 더한 값을 반환하며, 배열이 아닌 경우에는 false
import "./utils/sumArr.js";

// data-include 속성의 URL에서 HTML을 로드해 삽입
import "./utils/include.js";

/**********************************
 * Network Utility Functions
 * 네트워크 관련 유틸리티 함수
 **********************************/

// URL에서 AJAX 요청을 수행하여 JSON 데이터를 반환
import "./network/fetchAjax.js";
export * from "./network/fetchAjax.js";

// preview 파라미터에 _value가 있으면 콜백을 실행하고 일치 여부를 반환
import "./network/checkPreviewParams.js";
export * from "./network/checkPreviewParams.js";

// 특정 파라미터 이름으로 URL에서 값을 배열로 검색해 반환
import "./network/getUrlParameterValues.js";
export * from "./network/getUrlParameterValues.js";

/**********************************
 * Interface Utility Functions
 * 인터페이스 관련 유틸리티 함수
 **********************************/

// Device, 웹브러우저 정보 가져오기
import "./interface/getDevice.js";
export * from "./interface/getDevice.js";

// 이미지 URL 없으면 .thumb-box 제거
import "./interface/removeThumbnailBox.js";
export * from "./interface/removeThumbnailBox.js";

// 대체 이미지의 설정
import "./interface/handleImageError.js";
export * from "./interface/handleImageError.js";

// 이미지가 로드된 후 로딩 인디케이터를 제거
import "./interface/removeLoadingIndicator.js";
export * from "./interface/removeLoadingIndicator.js";
