const point = {
  async getData(url, option){
    const el = document.querySelector("img");
    el.src = await fetchData.main(url, option);
  }
};
const option = {type: "blob"};
point.getData("../../image/rose.png", option);
