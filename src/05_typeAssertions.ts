let response: any = "45"
// here although we are passing the value as string but its type will be any
// and in response we cannot use any methods from string

let lengthOfResponse1: number = response.length 
// this is not wrong but response.length could be of any type
// type assertion will allow that the given type is string

let lengthOfResponse: number = (response as string).length



type Book = {
    name: string
}

let bookString = `{"name": "Book name}`
let bookObject = JSON.parse(bookString) as Book
// we need to mention "as Book" because without that it wont get to know which type we are talking about
console.log(bookObject.name)

// unknown and any

// Never

type Role = "Admin" | "User"

function roleBasedAccess(role: Role): void{
    if(role === "Admin"){
        console.log("Admin based access");
        return
    } 
    if(role === "User") {
        console.log("User based access")
        return
    }
    role 
    // why did we write role at last when all scenarios are handeled
    // just to know that there are no cases left
    // lets say when new role is added in type Role
    // then hovering on role will give that un accessed type
}