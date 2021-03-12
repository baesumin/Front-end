const url = "../../image/code.png";
fetch(url).then((response) => {
  return response.blob();
}).then((blob) => {
  const el = document.querySelector("img");
  el.src = URL.createObjectURL(blob);
});
