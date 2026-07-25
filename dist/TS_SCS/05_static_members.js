"use strict";
// Math.PI is a class. Yet we dont ned to write ane new keyword to access this class.
// when we don't want to create any instance of a class and yet use the methods, properties
// STATIC is used
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    static id = 24;
    static getNumber(num) {
        return num;
    }
    static getRandomNumber() {
        return (Math.floor(Math.random() * 10 + 1));
    }
}
console.log(User.id = 78);
console.log(User.getNumber(56));
console.log(`random number: ${User.getRandomNumber()}`);
//# sourceMappingURL=05_static_members.js.map