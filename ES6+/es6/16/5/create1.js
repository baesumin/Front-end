"use strict";

// 디폴트 옵션
const defaultXHR = {
  method: "POST"
};

/**
 * @function create
 *  강좌의 비동기 통신과 비동기 프로세스에서 사용하는 공용 함수이다.
 *  - <script src="./create.js" defer></script>
 *  - Promise 인스턴스를 생성한다.
 *  - XMLHttpRequest 인스턴스를 생성한다.
 *  - onload 이벤트가 발생하면 resolve() 또는 reject()를 호출한다.
 * @param {Object} param, 통신 옵션
 *  - param.data에 서버로 전송할 데이터를 작성한다.
 *  - data: {name: "point"} 형태
 */
function create(param){
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function(){
      this.status === 200 ? resolve(JSON.parse(this.response))
                          : reject(this);
    };
    xhr.option = Object.assign({}, defaultXHR, param);
    setSendData(xhr);
    xhr.open(xhr.option.method, xhr.option.url);
    xhr.send(xhr.option.sendData);
  });
};

/**
 * @function setSendData
 *  서버로 전송할 데이터를 JSON 형태로 변환한다.
 *  전송할 데이터가 없으면 빈 문자열을 설정한다.
 * @param {Object} xhr, XHR 인스턴스
 *  xhr.option.data에 변환할 데이터가 있다.
 */
function setSendData(xhr){
  xhr.option.sendData = JSON.stringify(xhr.option.data || "");
};
