const book ={
    point: 100,
    get getPoint(){
        return this.point;
    },
    set setPoint(param){
        this.point = param;
    }
};

console.log(book.getPoint);
book.setPoint = 200;
console.log(book.getPoint);