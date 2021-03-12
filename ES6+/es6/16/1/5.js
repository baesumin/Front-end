const obj = new Promise((resolve, reject) => {
  resolve("성공");
  console.log("1. resolve");
});
obj.then((value) => {console.log("3. ", value)},
          (reason) => {console.log(reason)});
console.log("2. 마지막");
