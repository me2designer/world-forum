/**
 *
 * String to Array
 *
 */

String.prototype.strToArr = function () {
    if (this == "") return [];
    return this.split(",");
};
