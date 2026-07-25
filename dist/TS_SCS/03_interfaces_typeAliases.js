"use strict";
// INTERFACES
Object.defineProperty(exports, "__esModule", { value: true });
function getUser(obj) {
    return `Name: ${obj.name}, Email: ${obj.email}, password: ${obj.password}, ${obj.id ? "Id present" : "Id not present"}`;
}
console.log(getUser({
    name: "Alex",
    email: "alexdotcom",
    password: "1234",
}));
const getDetails = (obj) => {
    console.log(`${obj.admin ? `Name: ${obj.name} is a admin, Email: ${obj.email}.admin, ${obj.id ? "Id present" : "Id not present"}` : `${obj.name} is not an admin`}`);
};
getDetails({
    name: "Bruce",
    email: "batinacave",
    password: "1234",
    admin: false
});
let a = 1;
a = "2";
const truckDriver = {
    model: "Merc",
    color: "Black",
    id: 1234,
    capacity: 890
};
console.log(truckDriver);
//# sourceMappingURL=03_interfaces_typeAliases.js.map