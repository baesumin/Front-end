async function getData(option){
  for (let url of option){
    const res = await create(url);
    console.log(JSON.parse(res));
  };
};
const option = [
  {url: "../file/data1.txt"},
  {url: "../file/data2.txt"},
  {url: "../file/data3.txt"}
];
getData(option);
