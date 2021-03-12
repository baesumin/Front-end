const main = {
  point: 500,
  async getPoint(){
    const res = await create(this.option);
    console.log(res[this.option.data.name] + this.point);
  }
};
// {"sports": 100, "music": 200}
main.option = {
  url: "../file/pointData.txt",
  data: {name: "sports"}
};
main.getPoint();
