/**
 *
 * Date Replace With IE
 *
 */

String.prototype.dateReplaceIE = function () {
    return String(this).replaceAll("-", "/");
};
