const obj = new Headers({
  "Content-Type": "text/plain;charset=utf-8"
})
obj.set("Cache-Control", "no-cache");

async function postData(url, option){
  const res = await fetch(url, option);
};
const option = {
  method: "POST",
  headers: obj,
  body: JSON.stringify('{"book": "책"}')
};
postData("/data", option);
