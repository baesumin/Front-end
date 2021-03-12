const main = {
  point: 500,
  async getPoint(){
    try {
      const data = await create(this.option);
      this.showPoint(data);
    } catch(xhr){this.serverError(xhr)};
  },
  showPoint(data){
    console.log(data[this.option.data.name] + this.point);
  },
  serverError(xhr){ },
};
// {"sports": 100, "music": 200}
main.option = {
  url: "../file/pointData.txt",
  data: {name: "sports"}
};
main.getPoint();
