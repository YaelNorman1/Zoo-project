"use strict";
class Bird extends Animal {
    constructor(name, species, foodType, foodAmount, wingSpan) {
        super(name, species, foodType, foodAmount);
        this.wingSpan = wingSpan;
    }
    getWingSpan() {
        return this.wingSpan;
    }
}
