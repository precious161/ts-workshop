// Classes in Typescript
// class with object
class Person {
  fname: string;
  lname: string;
  readonly id: number;
  proffesion?: string;
  constructor(fname: string, lname: string, id: number, profession: string) {
    this.fname = fname;
    this.lname = lname;
    this.id = id;
    this.proffesion = profession;
  }
  proffesions() {
    console.log(`${this.fname} is a ${this.proffesion}`);
  }
}
const Teacher = new Person("Abebe", "Kebede", 6, "teacher");
Teacher.proffesions();

// class with interfaces
interface Animal {
  kind: string;
  food: string;
  sound?: string;
  eats(): void;
}
class Pet implements Animal {
  kind: string;
  food: string;
  sound: string;
  constructor(kind: string, food: string, sound: string) {
    this.kind = kind;
    this.food = food;
    this.sound = sound;
  }
  eats() {
    console.log(`${this.kind} eats ${this.food}`);
  }
}
const Dog = new Pet("Dog", "meat", "bark");

//Inheritance
class Cat extends Pet {
  kind: string;
  food: string;
  sound: string;
  constructor(kind: string, food: string, sound: string) {
    super(kind, food, sound);
    this.kind = kind;
    this.food = food;
    this.sound = sound;
  }
  eats() {
    console.log(`${this.kind}'s sound is ${this.sound}`);
  }
}
const cat = new Cat("Cat", "milk", "meow");
