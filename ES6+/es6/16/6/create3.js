
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

      // XHR의 모든 이벤트를 사용하면 별도의 함수로 분리한다
      xhr.onload = this.onLoad.bind(this, xhr, resolve, reject);
      xhr.onerror = this.onError.bind(this, xhr, reject);

      this.assignOption(xhr, param);
      this.setSendData(xhr);

      xhr.open(xhr.option.method, xhr.option.url);
      xhr.send(xhr.option.sendData);
    });
  },

  /**
   * @function assignOption
   *  디플트 옵션과 외부에서 지정한 옵션을 통합한다.
   *  디폴트와 외부 지정에 같은 값이 있으면
   *  - 디폴트 값이 외부 지정 값으로 대체된다.
   * @param {Object} xhr, XHR 인스턴스
   * @param {Object} param, 외부 지정 옵션
   *  create() 함수를 호출한 곳에서 지정한 옵션이다.
   */
  assignOption(xhr, param){
    xhr.option = Object.assign({}, this.defaultXHR, param);
  },

  /**
   * @function setSendData
   *  서버로 전송할 데이터를 JSON 형태로 변환한다.
   *  전송할 데이터가 없으면 빈 문자열을 설정한다.
   * @param {Object} xhr, XHR 인스턴스
   *  xhr.option.data에 변환할 데이터가 있다.
   */
  setSendData(xhr){
    if (xhr.option.data === undefined){
      xhr.option.sendData = "";
      return;
    };
    xhr.option.sendData = JSON.stringify(xhr.option.data);
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

    if (xhr.option.parsing){
      this.parseData(xhr);
      xhr.errorCode ? reject(xhr) : resolve(xhr.parseData);
    } else {
      resolve("");
    };
  },

  /**
   * @function parseData
   *  서버에서 받은 데이터를 파싱한다.
   * @param {Object} xhr, XHR 인스턴스
   *  xhr.response에 서버 데이터가 있다.
   */
  parseData(xhr){
    xhr.parseData = "";
    if (!xhr.response){
      return;
    };

    try {
      xhr.parseData = JSON.parse(xhr.response);
    } catch(e) {
      xhr.errorCode = "json";
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
