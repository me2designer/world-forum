/**
 *
 * 문자열 또는 숫자를 천 단위로 콤마 구분
 *
 */

String.prototype.toNumber = function () {
  var V = this.toString();

  var V1 = [];
  var V2 = V.match(/\..*$/g) ? V.match(/\..*$/g)[0] : "";

  if (!isNaN(V)) {
    var arr = [];
    for (var i = 0; i < V.replace(/\..*/, "").length; i++) {
      var C = V.charAt(i);
      arr.push(C);
    }
    arr.reverse();
    V1 = "";
    for (var i = 0; i < arr.length; i++) {
      var C = arr[i];
      V1 = C + (V1.length && !(i % 3) ? "," : "") + V1;
    }
    return V1 + V2;
  } else {
    return V;
  }
};

Number.prototype.toNumber = function () {
  var V = this.toString();
  return V.toNumber();
};
