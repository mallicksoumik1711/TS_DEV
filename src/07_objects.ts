// declaring object types

// let user: {
//     name: string,
//     password: string,
//     isOnline: boolean,
//     id: number
// }

// user = {
//     name: "Alex",
//     password: "abcd1234",
//     isOnline: true,
//     id: 123789
// }

// ---------------------------------------------

// type alias object

type User = {
    name: string,
    password: string,
    isOnline: boolean,
    id: number,
    prevIds: number []
}

const user: User = {
    name: "Alex",
    password: "1234abcd",
    isOnline: true,
    id: 12345678,
    prevIds: [1,2,3,4,5,6,7,8]
}

// ---------------------------------------------

// duck typing
// accepts extra values sometimes

type Laptop = {
    model: string
}

let laptop1: Laptop = {
    model: "HP"
}

let laptop2 = {
    model: "Mac",
    color: "Red"
}

laptop1 = laptop2

// --------------------------------------------------------------

// Partial datatype

type Car = {
    name: string,
    model: string,
    isInMarket: boolean
}

const bmw = (bmwcar: Partial<Car>) => {
    console.log(bmwcar)
}

bmw({name: "BMW", model: "BMW"})
bmw({}) // we can pass empty object as well

// this will accept partial data from type

// --------------------------------------------------------------

// Required

const mitsubshi = (mitcar: Required<Car>) => {
    console.log(mitcar)
}

mitsubshi({name: "Mitsubshi", model: "Mitsubshi", isInMarket: false})
// we have to give all values here

// --------------------------------------------------------------------

// Pick

const lamborghini = (lambcar: Pick<Car, "model" | "isInMarket">) => {
    console.log(lambcar)
}

lamborghini({model: "lamborghini", isInMarket: false})

// -----------------------------------------------------------------------

// Omit

const wagonr = (wagon: Omit<Car, "model">) => {
    console.log(wagon)
}

wagonr({name: "Waghonr", isInMarket: false})