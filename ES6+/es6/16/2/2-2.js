//&lt;script src="./create.js"&gt;&lt;/script&gt;
const opt = [
  {url: "../file/data.txt"},
  {url: "../file/파일없음.txt"}
];
Promise.all([create(opt[0]), create(opt[1])])
        .then((res) => console.log(res))
        .catch((xhr) => console.log(xhr.status));
