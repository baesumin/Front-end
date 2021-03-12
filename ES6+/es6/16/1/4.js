const obj = new XMLHttpRequest();
obj.onload = function(){
  if (this.status === 200){
    console.log(this.response);
  };
};
obj.open("GET", "../file/data.txt");
obj.send();
