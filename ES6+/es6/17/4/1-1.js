const point = {
  value: 100,
  async getData(url, option){
    const data = await fetchData.main(url, option);
    console.log(data);
    console.log(this.value + (data.bonus || 0));
  }
};
const option = {type: "json"};
point.getData("../file/pointData.txt", option);
// {"base": 100, "bonus": 200}
