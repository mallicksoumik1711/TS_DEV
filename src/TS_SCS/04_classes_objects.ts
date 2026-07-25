// CONSTRUCTOR
// special functions that runs first when the instances of a class is created
// they are created to set the properties of any objects

class Cinema{
    // here we need to give public keyword in order to access the variables inside constructor
    // when can we use this keyword? => when values are defined in class itself

    // constructor(title: string, cinematograpgy: string, cast: string[], totalPlays: number, isHit?: boolean){}
    constructor(public title: string, public cinematograpgy: string, public cast: string[], public totalPlays: number, public isHit?: boolean){}     // -> parameter properties
    // when we define parameters inside constructor only
}

const cinemaOne = new Cinema("Cinema One", "IMAX", ["Cast1, cast2, cast3, cast4"], 23)
console.log(cinemaOne)


class Music{
    dhun: string
    device: string

    constructor(dhun: string, device: string){
        this.dhun = dhun
        this.device = device    
    }

    getDetailsOfMusic():void{
        console.log(`Dhun: ${this.dhun}, Instrument: ${this.device}`)
    }
}

const guitar = new Music("A-Minor", "Guitar")
guitar.getDetailsOfMusic()



// ---------------------------------------------------------------------------------------------------------------



// ACCESS MODIFIERS

// public - values can be accessed anywhere and can be modified
//        - can be inside class, outside class , extended class etc

// private - can be accessed only within class 
//         - can be changed by methods

class Car{
    private bmw: string
    constructor(bmw: string){
        this.bmw = bmw
    }

    changeCar(carName: string):void{
        this.bmw = carName
    }
}

const carObj = new Car("BMW")
console.log(carObj)
// carObj.bmw = "Chevrolette"
carObj.changeCar("Mitsubshi")
console.log(carObj)


// protected
// - same as private but extended classes can also use the variables

class Employee{
    protected employeeId: string = "1234abcd"
}

class HumanResource extends Employee{
    changeId(id: string): string{
        return this.employeeId = id
    }
}

const doc = new HumanResource()
console.log(doc.changeId("qwerty98765"))


// ---------------------------------------------------------------------------------------------



// SUPER KEYWORD

// passes contructor of extended class
// basically used to get the values of parent classes
// derived classes can use the parameters of class from which its derived - super

class Phone{
    public phone: string

    constructor(phone: string){
        this.phone = phone
    }
}

class IPhone extends Phone{
    public iphone: string

    constructor(iphone: string, phone: string){
        super(phone)
        this.iphone = iphone
    }
    // super must be called before accessing any other values
}

const iphoneObj = new IPhone("IPhone from extended class", "Phone class variable")
console.log(iphoneObj)