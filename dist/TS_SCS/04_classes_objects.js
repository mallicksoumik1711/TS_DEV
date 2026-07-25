"use strict";
// CONSTRUCTOR
// special functions that runs first when the instances of a class is created
// they are created to set the properties of any objects
Object.defineProperty(exports, "__esModule", { value: true });
class Cinema {
    title;
    cinematograpgy;
    cast;
    totalPlays;
    isHit;
    // here we need to give public keyword in order to access the variables inside constructor
    // when can we use this keyword? => when values are defined in class itself
    // constructor(title: string, cinematograpgy: string, cast: string[], totalPlays: number, isHit?: boolean){}
    constructor(title, cinematograpgy, cast, totalPlays, isHit) {
        this.title = title;
        this.cinematograpgy = cinematograpgy;
        this.cast = cast;
        this.totalPlays = totalPlays;
        this.isHit = isHit;
    } // -> parameter properties
}
const cinemaOne = new Cinema("Cinema One", "IMAX", ["Cast1, cast2, cast3, cast4"], 23);
console.log(cinemaOne);
class Music {
    dhun;
    device;
    constructor(dhun, device) {
        this.dhun = dhun;
        this.device = device;
    }
    getDetailsOfMusic() {
        console.log(`Dhun: ${this.dhun}, Instrument: ${this.device}`);
    }
}
const guitar = new Music("A-Minor", "Guitar");
guitar.getDetailsOfMusic();
// ---------------------------------------------------------------------------------------------------------------
// ACCESS MODIFIERS
// public - values can be accessed anywhere and can be modified
//        - can be inside class, outside class , extended class etc
// private - can be accessed only within class 
//         - can be changed by methods
class Car {
    bmw;
    constructor(bmw) {
        this.bmw = bmw;
    }
    changeCar(carName) {
        this.bmw = carName;
    }
}
const carObj = new Car("BMW");
console.log(carObj);
// carObj.bmw = "Chevrolette"
carObj.changeCar("Mitsubshi");
console.log(carObj);
// protected
// - same as private but extended classes can also use the variables
class Employee {
    employeeId = "1234abcd";
}
class HumanResource extends Employee {
    changeId(id) {
        return this.employeeId = id;
    }
}
const doc = new HumanResource();
console.log(doc.changeId("qwerty98765"));
// ---------------------------------------------------------------------------------------------
// SUPER KEYWORD
// passes contructor of extended class
// basically used to get the values of parent classes
// derived classes can use the parameters of class from which its derived - super
class Phone {
    phone;
    constructor(phone) {
        this.phone = phone;
    }
}
class IPhone extends Phone {
    iphone;
    constructor(iphone, phone) {
        super(phone);
        this.iphone = iphone;
    }
}
const iphoneObj = new IPhone("IPhone from extended class", "Phone class variable");
console.log(iphoneObj);
//# sourceMappingURL=04_classes_objects.js.map