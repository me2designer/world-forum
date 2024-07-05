/**
 *
 * Date to String
 *
 */

Date.prototype.dateToStr = function () {
    return this.getFullYear() + "-" + Number(this.getMonth() + 1).numToStr_addZero() + "-" + Number(this.getDate()).numToStr_addZero();
};
