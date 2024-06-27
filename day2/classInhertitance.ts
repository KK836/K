class Vehicle {
  constructor(protected wheelCount: number) {}
  showNumberOfWheels() {
    console.log("moved ${this.wheelCount}");
  }
}

class Motocycle extends Vehicle {
  constructor() {
    super(2);
  }

  updateWheelCount(newWheelCount: number) {
    this.wheelCount = newWheelCount;
  }
}

let motorCycle = new Motocycle();
motorCycle.updateWheelCount(6);
motorCycle.showNumberOfWheels(); //expect moved 6

export {};
