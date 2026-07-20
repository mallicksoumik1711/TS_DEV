function hello(username: string, age: number, isLoggedIn: boolean): string{
    return `Hello ${username}, age${age}, cookies present: ${isLoggedIn}`
}

const username:string = "Alex"
const age:number = 23
const isLoggedIn:boolean = true

console.log(hello(username, age, isLoggedIn))