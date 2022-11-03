"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mammal = void 0;
const animal_1 = require("./animal");
class Mammal extends animal_1.Animal {
    constructor(name, species, foodType, foodAmount, durationPregnency) {
        super(name, species, foodType, foodAmount);
        this.durationPregnency = durationPregnency;
    }
    getDurationPregnency() {
        return this.durationPregnency;
    }
    printAnimal() {
        super.printAnimal();
        console.log("the duration of pregnancy is: " + this.durationPregnency + " monthes");
    }
}
exports.Mammal = Mammal;
