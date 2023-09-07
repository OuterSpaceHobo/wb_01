// Задача на классы и наследование: создайте базовый класс Shape (фигура), 
// который имеет методы для расчета площади и периметра. Затем создайте подклассы, 
// представляющие различные фигуры, такие как прямоугольник, круг и треугольник. 
// Реализуйте методы расчета площади и периметра для каждой фигуры.

class Shape {
    calculateArea() {
      // Выбрасываем ошибку, если метод calculateArea не был реализован в подклассе
      throw new Error('Метод calculateArea должен быть реализован');
    }
  
    calculatePerimeter() {
      // Выбрасываем ошибку, если метод calculatePerimeter не был реализован в подклассе
      throw new Error('Метод calculatePerimeter должен быть реализован');
    }
  }
  
  class Rectangle extends Shape {
    constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
    }
  
    calculateArea() {
      // Рассчитываем площадь прямоугольника
      return this.width * this.height;
    }
  
    calculatePerimeter() {
      // Рассчитываем периметр прямоугольника
      return 2 * (this.width + this.height);
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    calculateArea() {
      // Рассчитываем площадь круга
      return Math.PI * Math.pow(this.radius, 2);
    }
  
    calculatePerimeter() {
      // Рассчитываем периметр круга
      return 2 * Math.PI * this.radius;
    }
  }
  
  class Triangle extends Shape {
    constructor(side1, side2, side3) {
      super();
      this.side1 = side1;
      this.side2 = side2;
      this.side3 = side3;
    }
  
    calculateArea() {
      // Рассчитываем площадь треугольника по формуле Герона
      const s = (this.side1 + this.side2 + this.side3) / 2;
      return Math.sqrt(s * (s - this.side1) * (s - this.side2) * (s - this.side3));
    }
  
    calculatePerimeter() {
      // Рассчитываем периметр треугольника
      return this.side1 + this.side2 + this.side3;
    }
  }
  
  // Пример использования:
  const rectangle = new Rectangle(4, 5);
  console.log(rectangle.calculateArea()); // Выведет: 20
  console.log(rectangle.calculatePerimeter()); // Выведет: 18
  
  const circle = new Circle(3);
  console.log(circle.calculateArea()); // Выведет: 28.274333882308138
  console.log(circle.calculatePerimeter()); // Выведет: 18.84955592153876
  
  const triangle = new Triangle(3, 4, 5);
  console.log(triangle.calculateArea()); // Выведет: 6
  console.log(triangle.calculatePerimeter()); // Выведет: 12