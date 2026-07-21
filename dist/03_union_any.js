"use strict";
// const userId: number ;                     // const declaration gives error when declared but not initilised
// userId = 456789
Object.defineProperty(exports, "__esModule", { value: true });
let userId;
userId = 7876787;
console.log(userId);
// union
let id = 45;
id = "678";
console.log(id);
// any  avoid this
let name = "alex";
name = 78;
console.log(name);
// let books: "harry Potter" | "lord of the rings" | "Breaking bad" 
// books = "other than those 3"
// this is giving error as it wont accept any other values than the given unions
// also there would be some condition when it won't be assured that the assignment is confirmed
// so there we need to use undefined for that
const arr = [1, 2, 3, 4, 5];
let num; //here if i am specifically defining type then this will give error without undefined. as the code doesnt know if block will run or not
for (let i = 0; i < 5; i++) {
    if (i === 40) {
        num = i;
        break;
    }
}
function getusername(name) {
    console.log(name);
}
getusername("Alexroper");
const mix = {
    refined: "Refined",
    mineral: "Mineral"
};
console.log(mix);
//# sourceMappingURL=03_union_any.js.map