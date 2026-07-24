// interface Animal{
//     has4Legs: boolean
//     canJump: boolean
// }

// interface Dog extends Animal{
//     breed: string
//     age: number
//     bark(say: string): void
// }

// class Doggie implements Dog{
//     has4Legs: boolean = true
//     canJump: boolean = true
//     breed: string = "labrador"
//     age: number = 9
//     bark(tell: string){
//         console.log(`dog says ${tell}`)
//     }
// }

// const dog = new Doggie()
// dog.bark("woof")

// ------------------------------------------------------------------------------

// type

type Animal = {
    sayname: string
    isPet: boolean
}

type Dog = Animal & {
    says(): void
}

const Labrador: Dog = {
    sayname: "Labra",
    isPet: true,
    says(){
        console.log("woof")
    }
}

console.log(Labrador.says())