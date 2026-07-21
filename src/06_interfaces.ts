// why types

// function bmw(model: {type: string, color: "string", isAvailable: boolean}){
//     console.log(model)
// }

// function mitsubshi(model: {type: string, color: "string", isAvailable: boolean}){
//     console.log(model)
// }

// same model types are repeating son we can combine them into one

type ModelType = {
    type: string,
    color: string,
    isAvailable: boolean
}

function bmw(model: ModelType){
    console.log(`Model: ${model.type}, color: ${model.color}, available in market? ${model.isAvailable}`)
}

function mitsubshi(model: ModelType){
    console.log(`Model: ${model.type}, color: ${model.color}, available in market? ${model.isAvailable}`)
}

// bmw({type: "xr8", color: "red", isAvailable: true})
// bmw({type: "solana 55", color: "maroon", isAvailable: false})

// ------------------------------------------------------------------------------------------------------

// where type fails ---- ??

// when not in object format - not accessable by classes

class Car implements ModelType{
    type: string
    color: string
    isAvailable: boolean

    constructor(type: string, color: string, isAvailable: boolean){
        this.type = type
        this.color = color
        this.isAvailable = isAvailable
    }

    carDetails(){
        console.log(`Model: ${this.type}, color: ${this.color}, is present in market? ${this.isAvailable}`)
    }
}

const swift = new Car("desire", "red", false)
// swift.carDetails()

// here its accepting the type ModelType as its in object type {}
// lets say when the type is a literal type 

// type Teacher = "Maths" | "Science" | "Physical"

// class School implements Teacher{
//     constructor(obj: School){

//     }
// }

// here string literal type cannot be initilised in that class.
// Rather use Interfaces

// Interfaces

interface Teacher {
    subject: "maths" | "Science" | "Physical"
}

class School implements Teacher {
    subject: "maths" | "Science" | "Physical" = "Physical"
}
