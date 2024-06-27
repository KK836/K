function eat(calories: number) {
  console.log("I ate " + calories + " calories");
}

function sleepIn(hours: number): void {
  // 반환을 하지 않는다
  console.log("I slept " + hours + " hours");
}

let ate = eat(100);
console.log(ate);
let slept = sleepIn(10);
console.log(slept);
