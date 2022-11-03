"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fish = void 0;
const animal_1 = require("./animal");
class Fish extends animal_1.Animal {
    constructor(name, species, foodType, foodAmount, lowestDepth) {
        super(name, species, foodType, foodAmount);
        this.lowestDepth = lowestDepth;
    }
    getLowestDepth() {
        return this.lowestDepth;
    }
    printAnimal() {
        super.printAnimal();
        console.log("the duration of pregnancy is: " + this.lowestDepth);
    }
}
exports.Fish = Fish;
