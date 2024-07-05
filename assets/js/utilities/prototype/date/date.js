/**
 *
 * 현재 년 을 리턴합니다.
 *
 */
Date.prototype.getY = function () {
    let date = new Date();

    return `${date.getFullYear()}`;
};

/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/

/**
 *
 * 현재 년,월 을 리턴합니다.
 *
 */

Date.prototype.getYM = function () {
    let date = new Date();
    let month = date.getMonth() + 1;

    if (Number(month) < 10) month = "0" + month;

    return `${date.getFullYear()}-${month}`;
};

/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/

/**
 *
 * 현재 년,월, 일 리턴합니다.
 *
 */

Date.prototype.getYMD = function () {
    let date = new Date();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if (Number(month) < 10) month = "0" + month;
    if (Number(day) < 10) day = "0" + day;

    return `${date.getFullYear()}-${month}-${day}`;
};

/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/

/**
 *
 * 현재 년,월,일,시간 리턴합니다.
 *
 */

Date.prototype.getYMDH = function () {
    let date = new Date();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hrs = date.getHours();

    if (Number(month) < 10) month = "0" + month;
    if (Number(day) < 10) day = "0" + day;
    if (Number(hrs) < 10) hrs = "0" + hrs;

    return `${date.getFullYear()}-${month}-${day},${hrs}`;
};

/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/

/**
 *
 * 현재 년,월,일,시간,분 리턴합니다.
 *
 */

Date.prototype.getYMDHM = function () {
    let date = new Date();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hrs = date.getHours();
    let min = date.getMinutes();

    if (Number(month) < 10) month = "0" + month;
    if (Number(day) < 10) day = "0" + day;
    if (Number(hrs) < 10) hrs = "0" + hrs;
    if (Number(min) < 10) min = "0" + min;

    return `${date.getFullYear()}-${month}-${day},${hrs}:${min}`;
};

/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/

/**
 *
 * 현재 년,월,일,시간,분,초 리턴합니다.
 *
 */

Date.prototype.getYMDHMS = function () {
    let date = new Date();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hrs = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    if (Number(month) < 10) month = "0" + month;
    if (Number(day) < 10) day = "0" + day;
    if (Number(hrs) < 10) hrs = "0" + hrs;
    if (Number(min) < 10) min = "0" + min;
    if (Number(sec) < 10) sec = "0" + sec;

    return `${date.getFullYear()}-${month}-${day},${hrs}:${min}:${sec}`;
};

/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/

/**
 *
 * 월, 일의 포멧을 변경합니다
 *
 * [script 작성 예]
 * 1~9 -> 01~09
 *
 */

Date.prototype.formatYMD = function (_Date) {
    let month = _Date.getMonth() + 1;
    let day = _Date.getDate();

    if (Number(month) < 10) month = "0" + month;
    if (Number(day) < 10) day = "0" + day;

    return `${_Date.getFullYear()}-${month}-${day}`;
};

/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/

/**
 *
 * 두 날짜 계산기
 *
 * [script 작성 예]
 * new Date().formatDiffDays("2016-05-10", "2016-05-12") // 2 <두 날짜의 차이 일>
 *
 */

Date.prototype.formatDiffDays = function (sday, eday) {
    let date1 = new Date(sday.substr(0, 4), sday.substr(5, 2) - 1, sday.substr(8, 2));
    let date2 = new Date(eday.substr(0, 4), eday.substr(5, 2) - 1, eday.substr(8, 2));
    let interval = date2 - date1;
    let day = 1000 * 60 * 60 * 24;
    let month = day * 30;
    let year = month * 12;

    return parseInt(interval / day);
};

/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/

/**
 *
 * 일 단위 날짜 계산기
 *
 * [script 작성 예]
 * new Date().calcDay("2016-05-02", -10); // 2016-05-02 <10일전 날짜>
 *
 */

Date.prototype.calcDay = function (_Date, dayPrefix) {
    let transDate = new Date(_Date);
    let processTime = transDate.setDate(transDate.getDate() + dayPrefix);

    return new Date().formatYMD(new Date(processTime));
};

/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/

/**
 *
 * 월 단위 날짜 계산기
 *
 * [script 작성 예]
 * new Date().calcMonth("2022-03-31", -1); // 2022-02-28 <1 개월 전 날짜>
 *
 */

Date.prototype.calcMonth = function (_Date, _set = 0) {
    let date = new Date(_Date);
    let transDate = new Date(date.setMonth(date.getMonth() + _set));

    if (new Date(_Date).getDate() > transDate.getDate()) {
        transDate = new Date(transDate.setMonth(transDate.getMonth(), 0));
        return new Date().formatYMD(transDate);
    } else {
        return new Date().formatYMD(transDate);
    }
};

/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/

/**
 *
 * 월의 마지막 날, 시작 날 가져오기
 *
 * [script 작성 예]
 * new Date().lastDay("2022-08-03") // 2022-08-31
 * new Date().lastDay("2022-08-03", "startDay") // 2022-08-01
 *
 */

Date.prototype.lastDay = function (_Date, _set) {
    let date = new Date(_Date);
    let start = new Date(date.setMonth(date.getMonth(), 1));
    let last = new Date(date.setMonth(date.getMonth() + 1, 0));

    return _set === "startDay" ? new Date().formatYMD(start) : new Date().formatYMD(last);
};

/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
