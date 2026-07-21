// type narrowing
// indentify what kind of data is 

function getUserId(userId: string | number) {
    if (typeof userId === 'string') {
        return `UserId is : ${userId}`
    }

    return `userId : ${userId}`
}

// console.log(getUserId("abcd1234"))  // accepted
// console.log(getUserId(123455667))   // accepted
// getUserId(true)         // not accepted

// ----------------------------------------------------------------

// finding truthyness in values

function printMessage(msg?: string) {
    if (msg) {
        return `message is present: ${msg}`
    }
    return `No message to print.`
}

// console.log(printMessage("TRAIN is BOARdED"))

// ----------------------------------------------------------------

// exhaustive checks

function laptops(model: 'Mac' | 'HP' | 'Dell' | 'Lenovo' | number) {
    if (model === 'Mac') {
        return `Mac operating system`
    }
    if (model === 'HP' || model === 'Dell' || model === 'Lenovo') {
        return `Windows operating system`
    }
    return `Model number is : ${model}`
}

// console.log(laptops("Mac"))
// console.log(laptops(12345))

// -----------------------------------------------------------------

//guard rails - using typeof, instanceof, is

class Dog {
    fourLegs() {
        return `4 legs of dog`
    }
}

class Cat {
    fourLegs() {
        return `4 legs of cat`
    }
}

function animals(animal: Dog | Cat) {
    if (animal instanceof Dog) {
        return animal.fourLegs()
    }
    return animal.fourLegs()
}

// const doggie = new Dog()
// console.log(animals(doggie))

// const kitty = new Cat()
// console.log(animals(kitty))

// -------------------------------------------------------------------

// we can define our own type

type LaptopModels = {
    model: string
    price: number
}

function isLaptopModel(obj: any): obj is LaptopModels {                       // return a boolean "is laptopmodels"
    return (
        typeof obj === 'object' && obj !== null && typeof obj.model === "string" && typeof obj.price === "number"
    )
}

function orderLaptop(laptop: LaptopModels | string | undefined){
    if(isLaptopModel(laptop)){
        return `Laptop model : ${laptop.model} and its price is ${laptop.price}`
    }
    return `Not a valid model`
}

const lappy = {
    model: "Lenovo",
    price: 4000
}

// console.log(orderLaptop(lappy))

// --------------------------------------------------------------------------------------------------------------------

type StuntCompany = {
    type: "RedBull"
    companyRev: number
}

type PaymentCompany = {
    type: "PhonePay"
    isApp: boolean
}

type PlayCompany = {
    type: "BatBall"
    safety: number
}

type Company = StuntCompany | PaymentCompany | PlayCompany

function seeCompany(comp: Company){
    switch (comp.type) {
        case "RedBull":
            return `Stunt company`
            break;

        case "PhonePay":
            return `Payment company`
            break;

        case "BatBall":
            return `Play company`
            break;
    
        default: "hahahahaha"
            break;
    }
}

const company : Company = {
    type: "RedBull",
    companyRev: 77
}

console.log(seeCompany(company))