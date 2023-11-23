class Circle{
    constructor(radius,color){
        this.radius= radius;
        this.color = color;

    }
    getRadius(){
        return this.radius;
    }
    setRadius(radius){
        this.radius = radius;

    }
    getColor(){
        return this.color;

    }
    setColor(color){

        this.color = color;

    }

toString(){
    return Circle[radius=`${this.radius}`, color=`${this.color}`];

}
getArea(){
    return ((Math.PI)*this.radius*this.radius);

}
getCircumference(){
    return (2*(Math.PI)*this.radius);
}
}

let C1 = new Circle(7,"red");
let C2 =new Circle();
let C3 = new Circle(3.14);
console.log(C1.getRadius());
console.log(C1.getColor());

console.log(C1.getArea());
console.log(C1.getCircumference());
console.log(C2.getRadius());
console.log(C2.getColor());

console.log(C2.getArea());
console.log(C2.getCircumference());
console.log(C3.getRadius());
console.log(C3.getColor());

console.log(C3.getArea());
console.log(C3.getCircumference());
console.log(C1.toString());