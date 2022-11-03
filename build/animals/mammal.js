"use strict";
class Mammal extends Animal {
    constructor(name, species, foodType, foodAmount, durationPregnency) {
        super(name, species, foodType, foodAmount);
        this.durationPregnency = durationPregnency;
    }
    getDurationPregnency() {
        return this.durationPregnency;
    }
}
