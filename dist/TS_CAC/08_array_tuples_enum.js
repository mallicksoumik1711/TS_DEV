"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// array of strings
const arr = ["one", "two", "three"];
// array of nums
const arrPrice = [1, 2, 3, 4, 5];
const ArrPrice = [1, 2, 3, 4, 5];
const arrOfUsers = [
    {
        name: "Alex",
        id: 12345,
        isLoggedIn: true
    },
    {
        name: "Alex",
        id: 12345,
        isLoggedIn: true
    }
];
// readonly property
const cars = ['one', 'two'];
// cars.push('three')
// Tuples
let userTupple = ["alex", 23];
userTupple = ["menance", 90, false];
// readonly tupples
const tuppleUser = ["alex", 78];
// named tuples
const namedTupples = ["alex", 45];
// ------------------------------------------------------------------------------
// Enums
var Location;
(function (Location) {
    Location[Location["MUMBAI"] = 0] = "MUMBAI";
    Location[Location["PUNE"] = 1] = "PUNE";
    Location[Location["BENGALURU"] = 2] = "BENGALURU";
})(Location || (Location = {}));
function useLocation(loc) {
    console.log(loc);
}
// const area = Location.BENGALURU
useLocation(Location.BENGALURU);
// useLocation("Mumnbia")                     //-> error not suitable with Location
// Heterogeneous enums -> different type (not recomended)
// enums are typically same type either number, strings etc
//# sourceMappingURL=08_array_tuples_enum.js.map