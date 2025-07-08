// Typescript Datatypes
// String
let firstname: string = "Feyruza";

// Number
let password: number = 27846;

//Boolean
let isOnline = true;

//Any
let lastname: any = "Dawud";

lastname = 123;

// Undefined and null
let no: undefined = undefined;
let none: null = null;

// Array
let student: string[] = ["Feyruza", "Sumeya", "Hanan", "Nejat"];
let attributes: any[] = ["name", 78, true, null];
let numbers: number[] = [24, 55, 34, 23];

//Object
type students = {
  id: any;
  Name: string;
  age: number;
};
const Students: students = {
  id: "UGR/4747/17",
  Name: "Abebe",
  age: 21,
};

//Tuple
let person: [number, string, null] = [45, "girl", null];
let teachers: [number, string, any][] = [
  [3, "Ahmed", "Biology"],
  [6, "Adem", null],
];

// Union
let value: string | number = "Hawa";
value = 234;

// Enum
enum teacher {
  Physics,
  Biology,
  Chemistry,
}
enum techies {
  SE = "Software Engineer",
  AI = "AI Engineer",
  CS = "Cyber Security Specialist",
}
