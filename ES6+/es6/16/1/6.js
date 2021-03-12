const promise = new Promise((resolve, reject) => {
  console.log("1. XHR 생성");
  const obj = new XMLHttpRequest();
  obj.onload = function(){
    if (this.status === 200){
      resolve(this.response);
    };
  };
  obj.open("GET", "../file/data.txt");
  obj.send();
});
promise.then((res) => {console.log(res)});
console.log("2. 마지막");
