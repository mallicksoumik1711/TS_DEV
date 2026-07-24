interface User{
    name: string
    id: number
    address?: boolean
    readonly password: string
}

const userObj: User = {
    name: "Alex",
    id: 234,
    password: "1234abcd"
}

// userObj.password = "1234jjkfg"            // readonly property 

// ---------------------------------------------------------------------------------

// handle function with interfaces

interface Location{
    (location: string): string                           // arrow functions
}

// const findLocation: Location = (loc) => loc          // one way of writing arrow func
const findLocation: Location = (loc) => {
    return loc
}
console.log(findLocation("Mumbai"))


interface Area{
    findArea(length: number, breadth: number): number    // normal functions
}

const area: Area = {
    findArea(l, b){
        return l*b
    }
}
console.log(area.findArea(5,6))

// ------------------------------------------------------------------------------------------

// same interfaces name
// gets merged automatically

interface Car{
    model: string
}
interface Car{
    color: string
}

const bmw: Car = {
    model: "BMW",
    color: "black"
}

// -------------------------------------------------------------------------------------------

// extend interfaces

interface A{
    a: string
}

interface B{
    b: string
}

interface c extends A, B{}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Generics

// makes code reusable

function changeinArray<T>(num: T): T[]{
    return [num]
}

changeinArray("this is string")
changeinArray(67)
// we can give any datatype here
changeinArray({name: "alex"})


function pair<X, Y>(x: X, y: Y): [X, Y]{
    return [x, y]
}

pair("pair1", 2)
pair(true, "2")
pair({}, 7.99)