class Shape{

    draw(){

        console.log("Drawing a shape");

    }

}

class Circle extends Shape{
    draw(){

        console.log("Drawing circle");

    }
}
const shapes = [new Shape(),new Circle()];

shapes.forEach((shape)=>shape.draw())