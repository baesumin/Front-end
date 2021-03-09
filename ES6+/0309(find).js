const list = ["A", "B", "C"];
const cb = (value, index, all) => value === 'B';
const result = list.find(cb);
console.log(result);