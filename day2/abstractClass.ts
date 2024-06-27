namespace AbstractNamespace {
  abstract class Vehicle {
    constructor(protected wheelCount: number) {}
    abstract updateNumberOfWheels(newWheelCount: number): void;
    showNumberOfWheels() {
      console.log(`moved ${this.wheelCount}`);
    }
  }

  class Motocycle extends Vehicle {
    constructor() {
      super(2);
    }

    updateNumberOfWheels(newWheelCount: number) {
      this.wheelCount = newWheelCount;
    }

    class Automobile extends Vehicle {
      constructor() {
        super(4);
      }
    }

    updateWheelCount(newWheelCount: number){
      this.wheelCount = newWheelCount;
      console.log('Automobile has ${this.wheelCount}');
    }

    showNumberOfWheels() {
      console.log(`Automobile moved ${this.wheelCount}`);
      console.log("AutoMobile " + this.wheelCount + "moved");
    }
  }

  let motorCycle = new Motocycle();

  motorCycle.updateWheelCount(6);
  motorCycle.showNumberOfWheels(); //expect moved 6
}
export {};
