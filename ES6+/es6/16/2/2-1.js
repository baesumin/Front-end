//&lt;script src="./create.js"&gt;&lt;/script&gt;
const opt = [
  {url: "../file/data1.txt"},
  {url: "../file/data2.txt"}
];
Promise.all([create(opt[0]), create(opt[1])])
        .then((res) => console.log(res[0] + res[1]));
