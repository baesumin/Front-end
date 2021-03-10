class Point{
    constructor(point){this.point=point;}
    getPoint(){return this.point;}
}
const obj = new Point(100);
console.log(obj.getPoint());
console.log(obj.point);