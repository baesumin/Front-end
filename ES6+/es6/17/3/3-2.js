async function postData(url, option){
  const response = await fetch(url, option);
  console.log(response.headers.get("Content-Type"));
};
const option = {
  method: "POST",
  headers: {
    "Content-Type": "text/plain;charset=utf-8"
  },
  body: JSON.stringify('{"book": "책"}')
};
postData("/data", option);
