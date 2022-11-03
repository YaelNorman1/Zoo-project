"use strict";
class Animal {
    constructor(name, species, foodType, foodAmount) {
        this.name = name;
        this.species = species;
        this.food = new Food(foodType, foodAmount);
    }
}
