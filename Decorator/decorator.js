// Decorator Pattern are like annotations in Java
// Useful for when you want objects to have different options
// Take a base class
// Instantiate it- wrap many options around it
// Top level abstract component
class Car {
    getDescription() {
        return this.description;
    }
}
// Base car classes (concrete components)
class ModelS extends Car {
    constructor() {
        super(...arguments);
        this.description = "Model S";
    }
    cost() {
        return 73000;
    }
}
class ModelX extends Car {
    constructor() {
        super(...arguments);
        this.description = "Model X";
    }
    cost() {
        return 77000;
    }
}
// Abstract decorator class
class CarOptions extends Car {
}
// Decorators (concrete decorators)
class EnhancedAutoPilot extends CarOptions {
    constructor(car) {
        super();
        this.decoratedCar = car;
    }
    getDescription() {
        return this.decoratedCar.getDescription() + ", Enhanced AutoPilot";
    }
    cost() {
        return this.decoratedCar.cost() + 5000;
    }
}
class RearFacingSeats extends CarOptions {
    constructor(car) {
        super();
        this.decoratedCar = car;
    }
    getDescription() {
        return this.decoratedCar.getDescription() + ", Rear facing seats";
    }
    cost() {
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
