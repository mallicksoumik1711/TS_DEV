"use strict";
// declaring object types
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    name: "Alex",
    password: "1234abcd",
    isOnline: true,
    id: 12345678,
    prevIds: [1, 2, 3, 4, 5, 6, 7, 8]
};
let laptop1 = {
    model: "HP"
};
let laptop2 = {
    model: "Mac",
    color: "Red"
};
laptop1 = laptop2;
const bmw = (bmwcar) => {
    console.log(bmwcar);
};
bmw({ name: "BMW", model: "BMW" });
bmw({}); // we can pass empty object as well
// this will accept partial data from type
// --------------------------------------------------------------
// Required
const mitsubshi = (mitcar) => {
    console.log(mitcar);
};
mitsubshi({ name: "Mitsubshi", model: "Mitsubshi", isInMarket: false });
// we have to give all values here
// --------------------------------------------------------------------
// Pick
const lamborghini = (lambcar) => {
    console.log(lambcar);
};
lamborghini({ model: "lamborghini", isInMarket: false });
// -----------------------------------------------------------------------
// Omit
const wagonr = (wagon) => {
    console.log(wagon);
};
wagonr({ name: "Waghonr", isInMarket: false });
//# sourceMappingURL=07_objects.js.map