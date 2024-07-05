/**
 *
 * getNum
 *
 */

window.getNum = function (str) {
    return /[-+]?[0-9]*\.?[0-9]+/.test(str) ? parseFloat(str) : 0;
};
