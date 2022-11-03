"use strict";
class Fish extends Animal {
    constructor(name, species, foodType, foodAmount, lowestDepth) {
        super(name, species, foodType, foodAmount);
        this.lowestDepth = lowestDepth;
    }
    getLowestDepth() {
        return this.lowestDepth;
    }
}
