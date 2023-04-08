class Rect{
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
    call(){
        return this.width * this.height;
    }
}
const myRect = new Rect(100, 200);
const myRect1 = new Rect(200, 400);
console.log(myRect.call())
console.log(myRect1.call())

class NumPoly extends Rect{
    constructor(height,width,num){
        super(width,height);
        this.num = num ;
    }
    action(){
        return this.width * this.height * this.num ;
    }
}

const my = new NumPoly(50,80,3);
console.log(my.action())