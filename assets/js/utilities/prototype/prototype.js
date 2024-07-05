/**********************************
 * Prototype Methods
 * Array.prototype, Date.prototype, Element.prototype,
 * Number.prototype, Object.prototype, String.prototype
 **********************************/

/**********************************
 * Array.prototype
 * 배열 관련 메서드
 **********************************/

// 배열 무작위로 섞기
import "./array/shuffle.js";

// 숫자와 문자에 대한 오름차순 정렬
import "./array/sortAscending.js";

// 배열 내림차순 정렬
import "./array/sortDescending.js";

/**********************************
 * Date.prototype
 * 날짜와 시간 관련 메서드
 **********************************/

// 날짜와 시간 관련 유틸리티 함수 (예: 날짜 형식화, 날짜 간격 계산, 날짜 추가/제거 등)
import "./date/_date.js";

// Date to String
import "./date/dateToStr.js";

/**********************************
 * Element.prototype
 * DOM 요소 관련 메서드
 **********************************/

// eventListener 재정의
import "./element/eventListener.js";

// index 값 반환
import "./element/index.js";

// 형제 선택자
import "./element/siblings.js";

// trigger 이벤트
import "./element/trigger.js";

// margin, padding, border 제외한 width값 가져오기
import "./element/insideWidth.js";

// 지정한 요소 안에서 맨 앞에 노드를 추가
import "./element/prependChild.js";

// [class="className"] 요소에 className 있는지 true/false 반환
import "./element/hasClass.js";

/**********************************
 * Number.prototype
 * 숫자 관련 메서드
 **********************************/

// , 추가 (3자리 기준)
import "./number/addComma.js";

// getDay() : 1 - 월요일부터 시작, 0 - 일요일
import "./number/getWeekDay.js";

// 오버되는 자릿수 제한
import "./number/lengthLimit.js";

// 오버되는 자릿수 K/M으로 대체 및 3자리마다 콤마(,) 추가
import "./number/lengthLimitComma.js";

// K, M 단위 추가 및 소숫점 표기 추가
import "./number/lengthLimitCommaPoint.js";

// 10 이하 0 붙임
import "./number/numToStr_addZero.js";

/**********************************
 * Object.prototype
 * 객체 관련 메서드
 **********************************/

// 객체인지 확인
import "./object/isObject.js";

/**********************************
 * String.prototype
 * 문자열 관련 메서드
 **********************************/

// 추가 (3자리 기준)
import "./string/addComma.js";

// Date Replace With IE
import "./string/dateReplaceIE.js";

// 날짜 연도 내 주차 계산
import "./string/getWeekDay.js";

// 해당 날짜 포함 주의 요일로 날짜 구하기 (기본: 0 - 일요일)
import "./string/getDayDate.js";

// 단어와 단어 사이 추출하기
import "./string/getBetween.js";

// 말줄임
import "./string/lengthLimit.js";

// Parameter 형태를 JSON 형태로 변환
import "./string/paramToJson.js";

// Replace
import "./string/replaceAll.js";

// String to Array
import "./string/strToArr.js";

// 문자열 true, false를 boolean 타입으로 변환
import "./string/boolean.js";

// 문자열 또는 숫자를 천 단위로 콤마 구분
import "./string/toNumber.js";

// 문자열 중 소숫점 뒤 숫자가 0인 경우 소숫점 및 하위 숫자 제거
import "./string/removePointZero.js";
