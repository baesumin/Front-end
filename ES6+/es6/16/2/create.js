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
 */
function create(param){
  return new Promise((resolve, reject) => {
    const obj = new XMLHttpRequest();
    obj.onload = function(){
      this.status === 200 ? resolve(this.response)
                          : reject(this);
    };
    const opt = Object.assign({}, defaultXHR, param);
    obj.open(opt.method, opt.url);
    obj.send();
  });
};
