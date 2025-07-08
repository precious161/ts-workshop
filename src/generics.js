// Generics
// Basic Generics
function gen(a) {
    return a;
}
var dods = gen("name");
var ree = gen(7);
// Array generics
function arrr(b) {
    for (var k = 0; k < b.length; k++) {
        console.log(b[k]);
    }
}
var go = {
    time: 45,
};
var come = {
    time: "night",
};
//Generic in Classes
var eduacation = /** @class */ (function () {
    function eduacation(value) {
        this.value = value;
    }
    return eduacation;
}());
var Biology = new eduacation("Biology");
console.log(Biology.value);
