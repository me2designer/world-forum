/**
 *
 * 말줄임
 *
 */

String.prototype.lengthLimit = function ($limit) {
    var result = this;
    if (result.length > $limit) result = result.substr(0, $limit) + "...";
    return result;
};
