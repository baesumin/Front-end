const obj = new Map([
    ["key", "value"],
    [{book: 200}, "오브젝트"],
    [100, "Number"]
]);
for(let keyValue of obj){
    console.log(keyValue);
}