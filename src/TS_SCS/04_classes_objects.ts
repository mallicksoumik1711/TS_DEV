// CONSTRUCTOR
// special functions that runs first when the instances of a class is created
// they are created to set the properties of any objects

class Cinema{
    // here we need to give public keyword in order to access the variables inside constructor
    // when can we use this keyword? => when values are defined in class itself

    // constructor(title: string, cinematograpgy: string, cast: string[], totalPlays: number, isHit?: boolean){}
    constructor(public title: string, public cinematograpgy: string, public cast: string[], public totalPlays: number, public isHit?: boolean){}
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