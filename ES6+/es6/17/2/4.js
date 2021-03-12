async function getImage(url){
  const response = await fetch(url);
  if (response.status === 200){
    const blob = await response.blob();
    const el = document.querySelector("img");
    el.src = URL.createObjectURL(blob);
  };
};
getImage("../../image/rose.png");
