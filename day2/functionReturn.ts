// function func1(obj) {
// console.log("Hi");
// console.log(obj);
// }

function runMore(distance: number): number;

function runMore(distance: number): number {
  return distance + 10;
}

console.log(runMore(20));

// javascript

function printMeByJS(name, age) {
  console.log(`내 이름은 ${name}고, 나이는 ${age}이야`);
}

// typescript

function printMeByTS(name: string, age: number): void {
  console.log(`내 이름은 ${name}고, 나이는 ${age}이야`);
}
