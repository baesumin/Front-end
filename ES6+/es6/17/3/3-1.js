async function getData(url){
  const response = await fetch(url);
  console.log(response.headers.get("Content-Type"));
  for (const [name, value] of response.headers){
    console.log(`${name}: ${value}`);
  };
};
getData("../file/jsonData.txt");
