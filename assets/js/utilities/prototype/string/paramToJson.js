/**
 * 
 * Parameter형태를 Json형태로 변환
 * 
 */ 

String.prototype.paramToJson = function () {
  var param = this;
  var hash;
  var result = {};
  var hashes = param.slice(param.indexOf("?") + 1).split("&");
  for (var Loop1 = 0; Loop1 < hashes.length; ++Loop1) {
    hash = hashes[Loop1].split("=");
    result[hash[0]] = hash[1];
  }
  return result;
};