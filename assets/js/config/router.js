{
  /* Router for CSS and JS */
  // prettier-ignore
  window.ROUTER = [
    {
      location: "__COMMON__",
      files: [
        `/assets/fonts/NanumGothic/NanumGothic.css`,
        `/assets/css/style.css`,
        `/assets/js/utilities/utilities.module.js`,
        `/assets/js/core/global.js`,
        `/assets/js/layouts/HeaderComponent.module.js`
      ],
    },
  ];
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  /*  Cache */
  const cache = new URLSearchParams(location.search).get("cache");
  const getCache = (_time) => `?v=${Math.round(Date.now() / _time) * _time}`;
  window.CACHE = getCache(1); // 밀리초 단위
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  /**
   *
   *  객체인지 확인
   *
   *  [script 작성 예]
   *  Object.isObject({ firstName: "Mike" }), // true
   *  Object.isObject({}), // true
   *  Object.isObject([2, 3]), // false
   *  Object.isObject(null), // false
   *  Object.isObject(() => true) // false
   *
   */

  Object.isObject = function (_value) {
    return typeof _value === "object" && _value !== null && !Array.isArray(_value);
  };
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  /**
   *
   *  외부 CSS 파일 가져오기
   *
   *  [script 작성 예]
   *  window.loadScript({
   *      href : 'style.css', // or ["style1.css", "style2.css", "style3.css"]
   *      callback : function() {
   *          //callback
   *      }
   *  });
   */

  window.loadStyle = function (_options) {
    // "href" 값이 문자열인 경우
    if (typeof _options.href === "string") {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = _options.href + window.CACHE;
      link.onload = _options.callback;
      link.onerror = _options.callback;
      document.head.appendChild(link);
    }

    // "href" 값이 배열인 경우
    else if (Array.isArray(_options.href)) {
      const head = document.head;
      let count = 0;
      _options.href.forEach((_href) => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = _href + window.CACHE;
        link.onload = () => {
          count++;
          if (count === _options.href.length && _options?.callback) _options.callback();
        };
        link.onerror = _options.callback;
        head.appendChild(link);
      });
    }
  };
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  /**
   *
   *  외부 JS 파일 가져오기
   *
   *  [script 작성 예]
   *  window.loadScript({
   *      src : 'script.js', // or ["script1.js", "script2.js", "script3.js"]
   *      callback : function() {
   *          //callback
   *      }
   *  });
   */

  window.loadScript = function () {
    const src = Object.isObject(arguments[0]) ? arguments[0].src : arguments[0];
    const callback = typeof arguments[0].callback === "function" ? arguments[0].callback : typeof arguments[1] === "function" && arguments[1];

    Array.isArray(src) ? hasArrayType(src, callback) : hasStringType(src, callback);

    // "src" 값이 문자열인 경우
    function hasStringType(_src, _callback) {
      let script = document.createElement("script");

      script.src = _src.trim() + window.CACHE;
      if (_src.endsWith(".module.js")) {
        script.type = "module";
      }
      script.onload = _callback ? _callback : false;
      script.onerror = _callback;

      document.getElementsByTagName("head")[0].appendChild(script);
    }

    // "src" 값이 배열인 경우
    function hasArrayType(_srcs, _callback) {
      (async function () {
        for (const [_idx, _src] of _srcs.entries()) {
          await new Promise((resolve) => {
            let script = document.createElement("script");

            script.src = _src.trim() + window.CACHE;
            if (_src.endsWith(".module.js")) {
              script.type = "module";
            }
            script.onload = () => resolve();
            script.onerror = _callback;
            document.getElementsByTagName("head")[0].appendChild(script);
          });
        }
        _callback?.();
      })();
    }
  };
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  /**
   *
   *  외부 CSS/JS 파일 가져오기
   *
   *  [script 작성 예]
   *  window.loadScript({
   *      files : ["style1.css", "style2.css", "script1.js", "script2.js"],
   *      callback : function() {
   *          //callback
   *      }
   *  });
   */

  window.loadFiles = async function (_options) {
    const { files, callback } = _options;
    const cssPromises = [];

    for (let idx = 0; idx < files.length; idx++) {
      const file = files[idx];

      if (file.endsWith(".css")) {
        const cssPromise = new Promise((_resolve) => {
          window.loadStyle({
            href: file,
            callback: _resolve,
          });
        });
        cssPromises.push(cssPromise);
      }
    }

    await Promise.all(cssPromises);

    for (let idx = 0; idx < files.length; idx++) {
      const file = files[idx];

      if (file.endsWith(".js")) {
        await new Promise((_resolve) => {
          window.loadScript({
            src: file,
            callback: _resolve,
          });
        });
      }
    }
    callback?.();
  };
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  /* Loading Page Resources */
  (() => {
    const url = location.pathname;
    const hasCommonPath = window.ROUTER.find((_route) => _route.location === "__COMMON__");
    const hasCurrentPath = ROUTER.filter((_route) => {
      return Array.isArray(_route.location) ? _route.location.find((_location) => url.includes(_location)) : url.includes(_route.location);
    });

    // commone 리소스 유/무 확인
    if (hasCommonPath) {
      window.loadFiles({
        files: hasCommonPath.files,
        callback: () => {
          if (hasCurrentPath[0]) window.loadFiles({ files: hasCurrentPath[0].files });
        },
      });
    } else {
      if (hasCurrentPath[0]) window.loadFiles({ files: hasCurrentPath[0].files });
    }
  })();
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
