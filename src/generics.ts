// Generics

// Basic Generics
function gen<T>(a: T): T {
  return a;
}
let dods = gen("name");
let ree = gen(7);

// Array generics
function arrr<T>(b: T[]) {
  for (let k = 0; k < b.length; k++) {
    console.log(b[k]);
  }
}

// Generic Interfaces
interface bus<T> {
  time: T;
}
const go: bus<number> = {
  time: 45,
};
const come: bus<string> = {
  time: "night",
};

//Generic in Classes
class eduacation<T> {
  value: T;
  constructor(value: T) {
    this.value = value;
  }
}
const Biology = new eduacation<string>("Biology");
console.log(Biology.value);
