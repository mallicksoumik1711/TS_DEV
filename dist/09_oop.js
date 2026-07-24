"use strict";
// class User {
//     name: string
//     password: string
Object.defineProperty(exports, "__esModule", { value: true });
//     constructor(name: string, password: string){
//         this.name = name
//         this.password = password
//     }
// }
// const userOne = new User("Alex", "123abc")
// ---------------------------------------------------------------------------------------------
// Access Modifiers
class User {
    name;
    _password; // accessable only within classes
    // also written by #
    address; // only accessable by class or the instances created by that class
    constructor(name, password, address) {
        this.name = name;
        this._password = password;
        this.address = address;
    }
    revealPassword() {
        return this._password;
    }
}
const userOne = new User("Alex", "password is Password", "street 1234");
userOne.name;
userOne.revealPassword;
// only these two are visible. password will not be visible
class Alex extends User {
    showAddress() {
        return this.address;
    }
}
const alex = new Alex("Alex", "password123", "address is address");
alex.showAddress();
// -----------------------------------------------------------------------------------
// Getters and setters
// use them when defined fields
// _variableName
class Car {
    name = "BMW";
    _id = 129904;
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
}
const bmw = new Car();
bmw.id = 400;
// -----------------------------------------------------------------------
// static
class Laptop {
    modelIs;
    static model = "Lenovo";
    constructor(modelIs) {
        this.modelIs = modelIs;
    }
}
console.log(Laptop.model);
// abstract classes
class Phone {
}
class Android extends Phone {
    model = "Android";
    phoneModel() {
        console.log("This is Android");
    }
}
const andy = new Android();
andy.phoneModel();
// ----------------------------------------------------------------------------------------------
// composition [another version of inheritance]
class Clothes {
    type() { }
}
class Jeans {
    varName;
    constructor(varName) {
        this.varName = varName;
    }
    showClotheType() {
        this.varName.type;
    }
}
// polymorphism
// abstraction or another oop
//# sourceMappingURL=09_oop.js.map