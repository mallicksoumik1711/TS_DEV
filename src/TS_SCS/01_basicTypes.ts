// Primitive types - number, string, boolean, 
// reference - (), [], {} -> where ever we can see these brackets

// Tuples
// - fixed size
// - same format as described

let tuple: [number, string, boolean?] = [12, "Alex"]
tuple = [2, "two", false]

// --------------------------------------------------------------

// Enums enumerations

// - create properties
// - no need to remenber them for future just access the enum and set

enum UserRoles {
    ADMIN = "admin",
    GUEST = "guest",
    SUPER_ADMIN = "super_admin"
}

UserRoles.ADMIN

// - no numeric key in enums
// - values can hav enums

enum StatusCodes {
    SUCCESS = 200,
    NOT_FOUND = 404
}

StatusCodes.NOT_FOUND

// ---------------------------------------------------------------

// ANY vs UNKNOWN

// any - any values can be assigned present / future
// unknown - in future there will be some type assigned

let a: any
a = 10
a = "some randomValue"

a.toUpperCase()
// no errors in compile time - but in runtime there will be 
// should give error as uppercase cannot be assigned to number

let b: unknown
b = 20
b = "random value"

// b.toUpperCase()
// here this will give error

// ----------------------------------------------------------------------

// NEVER

// never returns anything 
// infinite loop
// throw errors