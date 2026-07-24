"use strict";
// rest parameter are used by spread operator ...variableName
Object.defineProperty(exports, "__esModule", { value: true });
function addAllNums(...nums) {
    let result = 0;
    nums.forEach((num) => {
        result += num;
    });
    return result;
}
console.log(typeof +true);
// unary operator converts the other datatype into number
console.log(`Value of +true: ${+true}`);
console.log(`Value of -true: ${-true}`);
console.log(`Value of +false: ${+false}`);
console.log(`Value of -false: ${-false}`);
console.log(`Value of +"123abc: ${+"123abc"}`);
console.log(`Value of -"123abc": ${-"123abc"}`);
console.log(`Value of +"123": ${+"123"}`);
console.log(`Value of -"123": ${-"123"}`);
console.log(addAllNums(1, 2, 3, 4, 5, +true));
const arrowFunc = (...nums) => {
    let result = 0;
    nums.forEach((num) => {
        result += num;
    });
    return result;
};
console.log(arrowFunc(10, 20, 30, 40, 50));
//# sourceMappingURL=01_functional_parameter_rest_operator.js.map