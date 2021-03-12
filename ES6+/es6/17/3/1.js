async function getImage(url){
  const response = await fetch(url);
  const blob = await response.blob();
  const el = document.querySelector("img");
  el.src = URL.createObjectURL(blob);
};
getImage("../../image/rose.png");
