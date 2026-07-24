"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userObj = {
    name: "Alex",
    id: 234,
    password: "1234abcd"
};
// const findLocation: Location = (loc) => loc          // one way of writing arrow func
const findLocation = (loc) => {
    return loc;
};
console.log(findLocation("Mumbai"));
const area = {
    findArea(l, b) {
        return l * b;
    }
};
console.log(area.findArea(5, 6));
const bmw = {
    model: "BMW",
    color: "black"
};
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Generics
// makes code reusable
function changeinArray(num) {
    return [num];
}
changeinArray("this is string");
changeinArray(67);
// we can give any datatype here
changeinArray({ name: "alex" });
function pair(x, y) {
    return [x, y];
}
pair("pair1", 2);
pair(true, "2");
pair({}, 7.99);
//# sourceMappingURL=10_interfaces_generics.js.map