/**
 *
 * API 통신에 따른 Data 반환
 *
 */

export async function fetchAjax(_urlOrData) {
  // _urlOrData가 배열인 경우, 직접 반환
  if (Array.isArray(_urlOrData)) {
    return _urlOrData;
  }

  const fetchOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  // 타임아웃 설정 (30초)
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => {
      const timeoutError = new Error("Request timeout");
      timeoutError.isTimeoutError = true;
      reject(timeoutError);
    }, 30000);
  });

  try {
    const response = await Promise.race([fetch(_urlOrData, fetchOptions), timeoutPromise]);

    if (response.ok) return await response.json();
    else throw new Error(`HTTP error ${response.status}`);
  } catch (_error) {
    console.log(`%c fetchAjax.js %c ${_error.isTimeoutError ? _error.isTimeoutError : _error}`, "color:yellow;background:#ffb6c16b", "color:auto;");
    throw _error;
  }
}

/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/

/**
 *
 *  Add a property to the window object
 *
 */

window.fetchAjax = fetchAjax;
