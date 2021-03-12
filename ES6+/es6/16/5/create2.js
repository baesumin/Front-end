
const promiseXHR = {
  defaultXHR: {
    method: "POST", parsing: true
  },

  /**
   * @function create
   *  강좌의 비동기 통신과 비동기 프로세스에서 사용하는 공용 함수이다.
   *  - Promise 인스턴스를 생성한다.
   *  - XMLHttpRequest 인스턴스를 생성한다.
   *  - onload 이벤트가 발생하면 resolve() 또는 reject()를 호출한다.
   * @param {Object} param, 통신 옵션
   *  - param.data에 서버로 전송할 데이터를 작성한다.
   *  - data: {name: "point"} 형태
   */
  create(param){
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      // xhr.onload = function(){
      //   this.status === 200 ? resolve(JSON.parse(this.response))
      //                       : reject(this);
      // };
      xhr.onload = function(){
        promiseXHR.onLoad(this, resolve, reject);
      };
      xhr.onerror = function(){
        promiseXHR.onError(this, reject);
      };
      // xhr.onload = promiseXHR.onLoad(this, resolve, reject);
      // xhr.onerror = promiseXHR.onError(this, reject);

      xhr.option = Object.assign({}, this.defaultXHR, param);
      this.setSendData(xhr);
      xhr.open(xhr.option.method, xhr.option.url);
      xhr.send(xhr.option.sendData);
    });
  },

  /**
   * @function setSendData
   *  서버로 전송할 데이터를 JSON 형태로 변환한다.
   *  전송할 데이터가 없으면 빈 문자열을 설정한다.
   * @param {Object} xhr, XHR 인스턴스
   *  xhr.option.data에 변환할 데이터가 있다.
   */
  setSendData(xhr){
    xhr.option.sendData = JSON.stringify(xhr.option.data || "");
  },

  /**
   * @function onLoad
   *  서버와 통신이 정상으로 종료되었을 때 호출된다.
   *  파일 수신을 성공하면 resolve()를 호출하고
   *  실패하면 reject()를 호출한다.
   * @param {Object} xhr, XHR 인스턴스
   *  xhr.option.data에 변환할 데이터가 있다.
   * @param {Function} resolve, Promise resolve() 함수
   * @param {Function} reject, Promise reject() 함수
   */
  onLoad(xhr, resolve, reject){
    if (xhr.status !== 200){
      xhr.errorCode = "not200";
      return reject(xhr);
    };

    try {
      const data = JSON.parse(xhr.response);
      resolve(data);
    } catch {
      // "JSON.parse 에러"
      xhr.errorCode = "json";
      reject(xhr);
    };
  },

  /**
   * @function onError
   *  서버와 통신이 비정상으로 종료되었을 때 호출된다.
   * @param {Object} xhr, XHR 인스턴스
   *  xhr.option.data에 변환할 데이터가 있다.
   * @param {Function} reject, Promise reject() 함수
   */
  onError(xhr, reject){
    reject(xhr);
  }
};
