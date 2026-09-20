class Rectangle{


    constructor(width,height){

        this.width = width;

        this.height = height

    }

    get area(){

        return this.width * this.height;

    }

    set dimensions(dimensions){

        this.width = dimensions.width;

        this.height = dimensions.height

    }


}

const rect = new Rectangle(10,5);

console.log(rect.area);


rect.dimensions = {width:20,height:10};

console.log(rect.area)