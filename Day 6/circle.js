class Circle {
    constructor(radius = 1.0, color = "red") {
        this.radius = radius;
        this.color = color;
      }
  
    getRadius() {
      return this.radius;
    }
  
    setRadius(radius) {
      this.radius = radius;
    }
  
    getColor() {
      return this.color;
    }
  
    setColor(color) {
      this.color = color;
    }
  
    getArea() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  
    getCircumference() {
      return 2 * Math.PI * this.radius;
    }
  
    toString() {
      return `Circle[radius=${this.radius}, Color=${this.color}]`;
    }
  }
  
  const defaultCircle = new Circle(6.0,"green");
  const customCircle = new Circle(5.0, "blue");
  
  console.log(defaultCircle.toString());
  console.log(customCircle.toString());
  
  console.log(`Area of customCircle: ${customCircle.getArea()}`);
  console.log(`Circumference of customCircle: ${customCircle.getCircumference()}`);
  