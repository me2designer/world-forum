/**
 *
 * 배열 무작위로 섞기
 *
 */

Array.prototype.shuffle = function () {
  var curIdx = this.length,
    tempVal,
    rndIdx;
  while (0 !== curIdx) {
    rndIdx = Math.floor(Math.random() * curIdx);
    curIdx -= 1;
    tempVal = this[curIdx];
    this[curIdx] = this[rndIdx];
    this[rndIdx] = tempVal;
  }
};
