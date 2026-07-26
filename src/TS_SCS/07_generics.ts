// Generics

// function_name <T> (argument1: T, argument2: T): T{}
// calling them - function_name<data type>(datatype value)
// the datatype after function name is not necessary. it automativally detects the type

// Generics functions

function userId<T>(id: T): T {
    return id
}

// console.log(userId("qwerty"))
// console.log(userId(123456))
// console.log(userId(true))
// console.log(userId({name: "User", Id: "some id"}))
// console.log(userId(function name(){}))

console.log(userId<number>(100))
console.log(userId<string>("ONE HUNDRED"))
console.log(userId<Object>({}))
console.log(userId<Object>(function name(){}))

// ------------------------------------------------------------------------------------

// Generics Interface

interface User<T>{
    name: string,
    age: number,
    userId: T
}

function userDet(val: User<number | string>): User<number | string>{
    return val
}

userDet({
    name: "",
    age: 34,
    userId: 'ujj'
})

// ------------------------------------------------------------------------------------

// Generic classes

class Car<T>{
    model: T
    constructor(model: T){
        this.model = model
    }
    showModel(){
        console.log(this.model)
    }
}

const obj1 = new Car<string>("BMW")
obj1.showModel()

const obj2 = new Car<number>(89777867)
obj2.showModel()

// ----------------------------------------------------------------------------------

// important while studying generics

function returningFunction<T>(num1: T): T{
    // return "Hey"         // even though when T will be string when function is called
    // return 100           // even when T is number when called

    // this happens because ts doesn't know what will be the values of T before calling.
    
    return num1
}

returningFunction(78)