async function getImage(url){
  const res = await fetch(url);
  console.log("error: ", res.error);
  console.log("headers: ", res.headers);
  console.log("ok: ", res.ok);
  console.log("redirect: ", res.redirect);
  console.log("redirected: ", res.redirected);
  console.log("status: ", res.status);
  console.log("statusText: ", res.statusText);
  console.log("type: ", res.type);
  console.log("url: ", res.url);
};
getImage("../../image/rose.png");
