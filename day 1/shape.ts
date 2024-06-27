class Person {
  name: string;
}

const jill: { name: string } = {
  name: "jill",
};

// const jill: Person = {
//  name: "jill"
//}

const person: Person = jill;

console.log(person);
