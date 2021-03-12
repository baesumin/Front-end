const main = {
  point: 500,
  async getPoint(){
    for (let opt of this.option){
      promiseXHR.create(opt).then((data) => {
        this.showPoint(opt, data);
      }).catch((xhr) => {
        this.rejectError(xhr)
      });
    }
  },
  showPoint(opt, data){
    if (Object.is(typeof data, "object")){
      console.log(data[opt.data.name] + this.point);
      return;
    };
    console.log(data);
  },
  rejectError(xhr){
    console.log(`${xhr.errorCode}: ${xhr.status}`);
  }
};
// {"sports": 100, "music": 200}
main.option = [
  {url: "../file/pointData.txt", data: {name: "sports"}},
  {url: "../file/timeout_data.txt"},
  {url: "../file/없는파일.txt"}
];
main.getPoint();
