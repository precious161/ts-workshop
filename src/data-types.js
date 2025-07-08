// Typescript Datatypes
// String
var firstname = "Feyruza";
// Number
var password = 27846;
//Boolean
var isOnline = true;
//Any
var lastname = "Dawud";
lastname = 123;
// Undefined and null
var no = undefined;
var none = null;
// Array
var student = ["Feyruza", "Sumeya", "Hanan", "Nejat"];
var attributes = ["name", 78, true, null];
var numbers = [24, 55, 34, 23];
var Students = {
    id: "UGR/4747/17",
    Name: "Abebe",
    age: 21,
};
//Tuple
var person = [45, "girl", null];
var teachers = [
    [3, "Ahmed", "Biology"],
    [6, "Adem", null],
];
// Union
var value = "Hawa";
value = 234;
// Enum
var teacher;
(function (teacher) {
    teacher[teacher["Physics"] = 0] = "Physics";
    teacher[teacher["Biology"] = 1] = "Biology";
    teacher[teacher["Chemistry"] = 2] = "Chemistry";
})(teacher || (teacher = {}));
var techies;
(function (techies) {
    techies["SE"] = "Software Engineer";
    techies["AI"] = "AI Engineer";
    techies["CS"] = "Cyber Security Specialist";
})(techies || (techies = {}));
