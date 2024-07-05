/**
 *
 * 형제 선택자
 *
 */

Element.prototype.siblings = function (_value) {
  const siblings = [...this.parentElement.children].filter((_$node) => _$node != this);
  const type = /^\./.test(_value) ? "class" : /^\#/.test(_value) ? "id" : /^\[/.test(_value) ? "attr" : "tag";
  let results = new Array();

  try {
    if (siblings == false) throw new Error(`${_value} 요소를 찾을 수 없습니다.`);
  } catch (_err) {
    console.log(`%c element.js %c ${_err}`, "color:yellow;background:#ffb6c16b", "color:red;");
    return;
  }

  switch (type) {
    case "class": {
      results = siblings.filter((_sibling) => _sibling.getAttribute(type) && _sibling.getAttribute(type).includes(_value.replace(/^\./g, "")) === true);
      break;
    }
    case "id": {
      results = siblings.filter((_sibling) => _sibling.getAttribute(type) && _sibling.getAttribute(type).includes(_value.replace(/^\#/g, "")) === true);
      break;
    }
    case "attr": {
      const isValue = /\=/.test(_value);
      let value = new Object();

      if (isValue) {
        value.attr = _value.getBetween("[", "=");
        value.value = _value.getBetween("=", "]");
      } else {
        value.attr = _value.replace(/\[|\]/g, "");
      }

      results = siblings.filter((_sibling) => {
        if (isValue) {
          return _sibling.getAttribute(value.attr) && _sibling.getAttribute(value.attr).includes(value.value) === true;
        } else {
          return _sibling.getAttribute(value.attr) && true;
        }
      });
      break;
    }
  }

  return results;
};
