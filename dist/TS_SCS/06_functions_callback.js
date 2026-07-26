"use strict";
// in ts when passing function as arguments
Object.defineProperty(exports, "__esModule", { value: true });
// function addNum(num1: number, num2: number, print(str: string): void){
//     console.log(print)
//     return num1+num2
// }
// this will throw error. how to define the type of function in ts as parameter
function addNum(num1, num2, printMessage) {
    // console.log(num1, num2)
    printMessage("Hello");
}
addNum(10, 20, (str) => {
    // console.log(str)
});
function add(num, str) {
    if (typeof num === "number" && str === undefined) {
        return num;
    }
    else if (typeof num === "number" && str !== undefined && typeof str === "string") {
        console.log("Hello", num);
    }
    else {
        throw new Error("error");
    }
}
console.log(add(1));
add(1, "hello");
//# sourceMappingURL=06_functions_callback.js.map