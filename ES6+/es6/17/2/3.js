const url = "../../image/rose.png";
const obj = new Request(url);
console.log("method: ", obj.method);
console.log("keepalive: ", obj.keepalive);
console.log("mode: ", obj.mode);
console.log("redirect: ", obj.redirect);
console.log("referrer: ", obj.referrer);
console.log("referrerPolicy: ", obj.referrerPolicy);
console.log("signal: ", obj.signal);
