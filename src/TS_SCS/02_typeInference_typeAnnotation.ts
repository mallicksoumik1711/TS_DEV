// TYPE INFERENCE

// - ts automatically detects the type of the variable, object, func(return type) etc
let a = 12
const b = "Alex"
// ts automatically detects them as number and string

// -------------------------------------------------------------------------------------------

// TYPE ANNOTATIONS

// manually telling ts what type is that

let num: number = 100
let str: string = "Value"

type User = {
    name: string
    id: number
    isLoggedIn?: boolean
}
const obj: User = {
    name: "soumik",
    id: 12
}