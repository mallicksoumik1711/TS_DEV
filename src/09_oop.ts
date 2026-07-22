// class User {
//     name: string
//     password: string

//     constructor(name: string, password: string){
//         this.name = name
//         this.password = password
//     }
// }

// const userOne = new User("Alex", "123abc")

// ---------------------------------------------------------------------------------------------

// Access Modifiers

class User {
    public name: string
    private _password: string | number        // accessable only within classes
    // also written by #

    protected address: string                // only accessable by class or the instances created by that class

    constructor(name: string, password: string, address: string) {
        this.name = name
        this._password = password
        this.address = address
    }

    revealPassword(): string | number {       // since password is a strng and number field
        return this._password
    }
}

const userOne = new User("Alex", "password is Password", "street 1234")
userOne.name
userOne.revealPassword
// only these two are visible. password will not be visible

class Alex extends User {
    showAddress() {
        return this.address
    }
}

const alex = new Alex("Alex", "password123", "address is address")
alex.showAddress()

// -----------------------------------------------------------------------------------

// Getters and setters

// use them when defined fields
// _variableName

class Car {
    name: string = "BMW"
    private _id: number = 129904

    get id() {
        return this._id
    }
    set id(value: number) {
        this._id = value
    }
}

const bmw = new Car()
bmw.id = 400

// -----------------------------------------------------------------------

// static

class Laptop{
    static model: string = "Lenovo"
    constructor(public modelIs: string){}
}
console.log(Laptop.model)

// abstract classes

abstract class Phone{
    abstract phoneModel(): void
}

class Android extends Phone{
    model: string = "Android"
    phoneModel(): void {
        console.log("This is Android")
    }
}

const andy = new Android()
andy.phoneModel()

// ----------------------------------------------------------------------------------------------

// composition [another version of inheritance]

class Clothes{
    type(){}
}

class Jeans{
    constructor(private varName: Clothes){}
    showClotheType(){
        this.varName.type
    }
}

// polymorphism
// abstraction or another oop