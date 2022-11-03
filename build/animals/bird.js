"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bird = void 0;
const animal_1 = require("./animal");
class Bird extends animal_1.Animal {
    constructor(name, species, foodType, foodAmount, wingSpan) {
        super(name, species, foodType, foodAmount);
        this.wingSpan = wingSpan;
    }
    getWingSpan() {
        return this.wingSpan;
    }
    printAnimal() {
        super.printAnimal();
        console.log("the duration of pregnancy is: " + this.wingSpan);
    }
}
exports.Bird = Bird;
