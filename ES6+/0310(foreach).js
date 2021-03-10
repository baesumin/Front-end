const obj = new Map([
    ["one", 100],
    ["two", 200]
]);
const callback = (value, key, map) => {
    console.log(`${key}, ${value}`);
};
obj.forEach(callback);