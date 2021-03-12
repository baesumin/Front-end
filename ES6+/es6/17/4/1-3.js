const point = {
  async getData(url, option){
    const data = await fetchData.main(url, option);
    console.log(data);
    if (data.errorCode === "NetWork"){
      console.log("네트워크 에러");
    };
  }
};
const option = {type: "json"};
point.getData("../file/pointData.txt", option);
