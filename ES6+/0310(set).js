const obj = new Set([ //중복 제거
    1, 2, "ABC"
])
console.log(`size: ${obj.size}`);

for(let value of obj){
    console.log(value);
}