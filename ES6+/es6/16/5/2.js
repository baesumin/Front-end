const main = {
  point: 500,
  async getPoint(opt){
    promiseXHR.create(this.option).then((data) => {
      console.log(data[this.option.data.name] + this.point);
    }).catch((xhr) => {
      console.log(xhr.status);
    });
  }
};
// {"sports": 100, "music": 200}
main.option = {
  url: "../file/pointData.txt",
  data: {name: "sports"}
};
main.getPoint();
