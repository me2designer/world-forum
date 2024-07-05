/**
 *
 * 해당날짜 포함 주의 요일로 날짜 구하기(기본:0(일요일))
 *
 */

String.prototype.getDayDate = function ($day) {
    $day = $day ? $day : 0;
    var paramDate = new Date(this + " 00:00:00");
    while (String(paramDate.getDay()) != String($day)) {
        paramDate.setDate(paramDate.getDate() - 1);
    }
    return paramDate.dateToStr();
};
