
const fetchData = {
  defaultFetch: {
    method: "POST", type: "json"
  },

  /**
   * @function main
   *  fetch()로 서버와 통신한다.
   *  서버에서 받은 데이터를 데이터 타입에 맞게 변환한다.
   *  [To DO]
   *  - 점진적으로 프레임워크 개념으로 접근하여 코드를 추가한다.
   * @param {String} url
   * @param {Object} option, Request/Response 옵션
   */
  async main(url, option){
    this.option = Object.assign({}, this.defaultFetch, option);
    this.setSendData();
    try {
      const response = await fetch(url, this.option);
      return response.ok ? await this.convertData(response)
                         : {error: response, errorCode: "OKError"};
    } catch (error){
      //server down
      return {error: error, errorCode: "NetWork"};
    };
  },

  /**
   * @function setSendData
   *  서버로 전송할 데이터를 JSON 형태로 변환한다.
   *  전송할 데이터가 없으면 빈 문자열을 설정한다.
   * @param {Object} xhr, XHR 인스턴스
   *  xhr.option.data에 변환할 데이터가 있다.
   */
  setSendData(){
    if (this.option.data === undefined){
      this.option.body = "";
      return;
    };
    this.option.body = JSON.stringify(this.option.data);
  },

  /**
   * @function convertData
   *  main()을 호출할 때 option에 작성한 type에 맞도록
   *  서버에서 받은 데이터를 변환한다.
   * @param {Object} res, 서버에서 받은 response
   */
  async convertData(res){
    switch (this.option.type) {
      case "json":
        return await res.json();
      case "blob":
        const blob = await res.blob();
        return URL.createObjectURL(blob);
      case "text":
        return await res.text();
      case "arrayBuffer":
        //코드 작성
      case "formData":
        //코드 작성
    };
  }
};
