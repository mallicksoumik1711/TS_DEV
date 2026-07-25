"use strict";
// Primitive types - number, string, boolean, 
// reference - (), [], {} -> where ever we can see these brackets
Object.defineProperty(exports, "__esModule", { value: true });
// Tuples
// - fixed size
// - same format as described
let tuple = [12, "Alex"];
tuple = [2, "two", false];
// --------------------------------------------------------------
// Enums enumerations
// - create properties
// - no need to remenber them for future just access the enum and set
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "admin";
    UserRoles["GUEST"] = "guest";
    UserRoles["SUPER_ADMIN"] = "super_admin";
})(UserRoles || (UserRoles = {}));
UserRoles.ADMIN;
// - no numeric key in enums
// - values can hav enums
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["SUCCESS"] = 200] = "SUCCESS";
    StatusCodes[StatusCodes["NOT_FOUND"] = 404] = "NOT_FOUND";
})(StatusCodes || (StatusCodes = {}));
StatusCodes.NOT_FOUND;
// ---------------------------------------------------------------
// ANY vs UNKNOWN
// any - any values can be assigned present / future
// unknown - in future there will be some type assigned
let a;
a = 10;
a = "some randomValue";
a.toUpperCase();
// no errors in compile time - but in runtime there will be 
// should give error as uppercase cannot be assigned to number
let b;
b = 20;
b = "random value";
// b.toUpperCase()
// here this will give error
// ----------------------------------------------------------------------
// NEVER
// never returns anything 
// infinite loop
// throw errors
//# sourceMappingURL=01_basicTypes.js.map