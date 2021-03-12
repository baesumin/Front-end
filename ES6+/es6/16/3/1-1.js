const defaultXHR = {method: "POST"};
function create(param){
  return new Promise((resolve, reject) => {
    const obj = new XMLHttpRequest();
    obj.onload = function(){
      this.status === 200 ? resolve(this.response)
                          : reject(this);
    };
    const opt = Object.assign({}, defaultXHR, param);
    obj.open(opt.method, opt.url);
    obj.send();
  });
};
