/**
 *
 * Replace
 *
 */

String.prototype.replaceAll = function ($rgExp, $replaceText) {
    var oStr = this;
    while (oStr.indexOf($rgExp) > -1) oStr = oStr.replace($rgExp, $replaceText);
    return oStr;
};
