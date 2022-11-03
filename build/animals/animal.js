"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
const food_1 = require("../food/food");
class Animal {
    constructor(name, species, foodType, foodAmount) {
        this.name = name;
        this.species = species;
        this.food = new food_1.Food(foodType, foodAmount);
    }
    printAnimal() {
        console.log(this.name + "is a kind of: " + this.species + "it eats: ");
        this.food.printFood();
    }
    getAnimalFoodType() {
        return this.food.getFoodType();
    }
    getAnimalFoodAmount() {
        return this.food.getFoodAmount();
    }
    eat() {
        this.food.setFoodAmount(this.food.getFoodAmount() * -1);
    }
}
exports.Animal = Animal;
