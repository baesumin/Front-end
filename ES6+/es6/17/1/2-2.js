async function getImage(url){
  const response = await fetch(url);
  return response.blob();
};
const url = "../../image/code.png";
getImage(url).then((blob) => {
  const el = document.querySelector("img");
  el.src = URL.createObjectURL(blob);
});
