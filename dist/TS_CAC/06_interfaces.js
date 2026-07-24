"use strict";
// why types
Object.defineProperty(exports, "__esModule", { value: true });
function bmw(model) {
    console.log(`Model: ${model.type}, color: ${model.color}, available in market? ${model.isAvailable}`);
}
function mitsubshi(model) {
    console.log(`Model: ${model.type}, color: ${model.color}, available in market? ${model.isAvailable}`);
}
// bmw({type: "xr8", color: "red", isAvailable: true})
// bmw({type: "solana 55", color: "maroon", isAvailable: false})
// ------------------------------------------------------------------------------------------------------
// where type fails ---- ??
// when not in object format - not accessable by classes
class Car {
    type;
    color;
    isAvailable;
    constructor(type, color, isAvailable) {
        this.type = type;
        this.color = color;
        this.isAvailable = isAvailable;
    }
    carDetails() {
        console.log(`Model: ${this.type}, color: ${this.color}, is present in market? ${this.isAvailable}`);
    }
}
const swift = new Car("desire", "red", false);
class School {
    subject = "Physical";
}
//# sourceMappingURL=06_interfaces.js.map