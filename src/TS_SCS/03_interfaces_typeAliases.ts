// INTERFACES

// define the structure of object

interface User {
    name: string,
    email: string,
    password: string,
    id?: boolean
}

function getUser(obj: User): string {
    return `Name: ${obj.name}, Email: ${obj.email}, password: ${obj.password}, ${obj.id ? "Id present" : "Id not present"}`
}

console.log(getUser({
    name: "Alex",
    email: "alexdotcom",
    password: "1234",
}))



// EXTENDING INTERFACES

interface Admin extends User {
    admin: boolean
}

const getDetails = (obj: Admin): void => {
    console.log(`${obj.admin ? `Name: ${obj.name} is a admin, Email: ${obj.email}.admin, ${obj.id ? "Id present" : "Id not present"}` : `${obj.name} is not an admin`}`)
}

getDetails({
    name: "Bruce",
    email: "batinacave",
    password: "1234",
    admin: false
})



// -------------------------------------------------------------------------------------------------------------------------



// TYPE ALIASES

type CountNumbers = number | string | null;

let a:CountNumbers = 1
a = "2"


// UNION AND INTERSECTION

type Car = {
    model: string
    color: string
    id: number
} 

type Truck = Car & {
    capacity: number
    loader?: boolean
}

const truckDriver: Truck = {
    model: "Merc",
    color: "Black",
    id: 1234,
    capacity: 890
}
console.log(truckDriver)