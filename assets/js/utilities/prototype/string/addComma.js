/**
 *
 * ,추가(3자리 기준)
 *
 */

String.prototype.addComma = function () {
    var txtNumber = "" + this;
    if (isNaN(txtNumber) || txtNumber == "") {
        //alert("숫자만 입력 하세요");
        return;
    } else {
        var rxSplit = new RegExp("([0-9])([0-9][0-9][0-9][,.])");
        var arrNumber = txtNumber.split(".");
        arrNumber[0] += ".";
        do {
            arrNumber[0] = arrNumber[0].replace(rxSplit, "$1,$2");
        } while (rxSplit.test(arrNumber[0]));

        if (arrNumber.length > 1) {
            return arrNumber.join("");
        } else {
            return arrNumber[0].split(".")[0];
        }
    }
};
