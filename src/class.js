var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Classes in Typescript
// class with object
var Person = /** @class */ (function () {
    function Person(fname, lname, id, profession) {
        this.fname = fname;
        this.lname = lname;
        this.id = id;
        this.proffesion = profession;
    }
    Person.prototype.proffesions = function () {
        console.log("".concat(this.fname, " is a ").concat(this.proffesion));
    };
    return Person;
}());
var Teacher = new Person("Abebe", "Kebede", 6, "teacher");
Teacher.proffesions();
var Pet = /** @class */ (function () {
    function Pet(kind, food, sound) {
        this.kind = kind;
        this.food = food;
        this.sound = sound;
    }
    Pet.prototype.eats = function () {
        console.log("".concat(this.kind, " eats ").concat(this.food));
    };
    return Pet;
}());
var Dog = new Pet("Dog", "meat", "bark");
//Inheritance
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(kind, food, sound) {
        var _this = _super.call(this, kind, food, sound) || this;
        _this.kind = kind;
        _this.food = food;
        _this.sound = sound;
        return _this;
    }
    Cat.prototype.eats = function () {
        console.log("".concat(this.kind, "'s sound is ").concat(this.sound));
    };
    return Cat;
}(Pet));
var cat = new Cat("Cat", "milk", "meow");
