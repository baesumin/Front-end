const list = [10, 20];
const obj = list[Symbol.iterator]();
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());