async function getImage(url){
  const obj = new Request(url, {method: "GET"});
  console.log("url: ", obj.url);
  console.log("method: ", obj.method);
  const response = await fetch(obj);
  return response.blob();
};
const url = "../../image/rose.png";
getImage(url).then((blob) => {
  const el = document.querySelector("img");
  el.src = URL.createObjectURL(blob);
});
