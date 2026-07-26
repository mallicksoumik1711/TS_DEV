"use strict";
// Generics
Object.defineProperty(exports, "__esModule", { value: true });
// function_name <T> (argument1: T, argument2: T): T{}
// calling them - function_name<data type>(datatype value)
// the datatype after function name is not necessary. it automativally detects the type
// Generics functions
function userId(id) {
    return id;
}
// console.log(userId("qwerty"))
// console.log(userId(123456))
// console.log(userId(true))
// console.log(userId({name: "User", Id: "some id"}))
// console.log(userId(function name(){}))
console.log(userId(100));
console.log(userId("ONE HUNDRED"));
console.log(userId({}));
console.log(userId(function name() { }));
function userDet(val) {
    return val;
}
userDet({
    name: "",
    age: 34,
    userId: 'ujj'
});
// ------------------------------------------------------------------------------------
// Generic classes
class Car {
    model;
    constructor(model) {
        this.model = model;
    }
    showModel() {
        console.log(this.model);
    }
}
const obj1 = new Car("BMW");
obj1.showModel();
const obj2 = new Car(89777867);
obj2.showModel();
//# sourceMappingURL=07_generics.js.map