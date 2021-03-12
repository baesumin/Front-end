async function getData(url){
  const response = await fetch(url);
  console.log("bodyUsed: ", response.bodyUsed);
  console.log(await response.json());
  console.log("body: ", response.body);
  console.log("bodyUsed: ", response.bodyUsed);
};
getData("../file/jsonData.txt");
// {"book": "책", "music": "음악"}
