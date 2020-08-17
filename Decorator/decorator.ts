// Decorator Pattern are like annotations in Java
// Useful for when you want objects to have different options

// Take a base class
// Instantiate it- wrap many options around it

// Top level abstract component
abstract class Car {
  public description: string;

  public getDescription(): string {
    return this.description;
  }

  public abstract cost(): number;
}

// Base car classes (concrete components)
class ModelS extends Car {
  public description = "Model S";

  public cost(): number {
    return 73000;
  }
}

class ModelX extends Car {
  public description = "Model X";

  public cost(): number {
    return 77000;
  }
}

// Abstract decorator class
abstract class CarOptions extends Car {
  decoratedCar: Car;
  public abstract getDescription(): string;

  public abstract cost(): number;
}

// Decorators (concrete decorators)
class EnhancedAutoPilot extends CarOptions {
  decoratedCar: Car;

  constructor(car: Car) {
    super();
    this.decoratedCar = car;
  }

  public getDescription(): string {
    return this.decoratedCar.getDescription() + ", Enhanced AutoPilot";
  }
  public cost(): number {
    return this.decoratedCar.cost() + 5000;
  }
}

class RearFacingSeats extends CarOptions {
  decoratedCar: Car;

  constructor(car: Car) {
    super();
    this.decoratedCar = car;
  }

  public getDescription(): string {
    return this.decoratedCar.getDescription() + ", Rear facing seats";
  }
  public cost(): number {
    return this.decoratedCar.cost() + 4000;
  }
}

// base
let myTesla = new ModelS();
// wrapping object with our new options
myTesla = new RearFacingSeats(myTesla);
myTesla = new EnhancedAutoPilot(myTesla);

console.log(myTesla.cost());
console.log(myTesla.getDescription());
