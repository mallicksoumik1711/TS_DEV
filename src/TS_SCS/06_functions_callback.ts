// in ts when passing function as arguments

// function addNum(num1: number, num2: number, print(str: string): void){
//     console.log(print)
//     return num1+num2
// }

// this will throw error. how to define the type of function in ts as parameter

function addNum(num1: number, num2: number, printMessage: (str: string) => void): void{
    // console.log(num1, num2)
    printMessage("Hello")
}

addNum(10, 20, (str: string) => {
    // console.log(str)
})

// message_name: () => return_type
// in callback



// -----------------------------------------------------------------------------------------------------

// FUNCTION OVERLOAD

// same name diff parameters

// function sum(num: number) : number {
//     return num
// }

// function sum(num: number, str: string, bool: boolean): void{}

// sum(1)

// we need to define the signature first
// the above code will give error as "duplicate method"

// function signature

function add(num: number): number
function add(num: number, str: string): void

function add(num: unknown, str?: unknown){           // sinse str is optional in add(num) we have to make it optional parameter
    if(typeof num === "number" && str === undefined){
        return num
    }
    else if(typeof num === "number" && str !== undefined && typeof str === "string"){
        console.log("Hello", num)
    }
    else{
        throw new Error("error")
    }
}

console.log(add(1))
add(1, "hello")
