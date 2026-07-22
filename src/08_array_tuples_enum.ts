// array of strings
const arr: string[] = ["one", "two", "three"]

// array of nums
const arrPrice: number[] = [1,2,3,4,5]

const ArrPrice: Array<number> = [1,2,3,4,5]

// array of objects

type User = {
    name: string,
    id: number,
    isLoggedIn: boolean
}

const arrOfUsers: User[] = [
    {
        name: "Alex",
        id: 12345,
        isLoggedIn: true
    },
    {
        name: "Alex",
        id: 12345,
        isLoggedIn: true
    }
]

// readonly property

const cars: readonly string[] = ['one', 'two']
// cars.push('three')

// Tuples

