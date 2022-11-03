"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Zoo = void 0;
const foodSupply_1 = require("./food/foodSupply");
class Zoo {
    constructor(animals, initFoodSupply) {
        this.animals = animals;
        this.foodSupply = new foodSupply_1.FoodSupply(initFoodSupply);
    }
    printAnimalsZoo() {
        this.animals.forEach(animal => animal.printAnimal());
    }
    feedAnimals() {
        for (let day = 0; day < 14; day++) {
            for (const animal of this.animals) {
                const animalFoodType = animal.getAnimalFoodType();
                const animalFoodAmount = animal.getAnimalFoodAmount();
                if (this.feedAndUpdateFoodSupply(animalFoodType, animalFoodAmount))
                    console.log("fed " + animal.name + " successfully");
                else {
                    console.log("Need to refill food of ");
                    this.foodSupply.refillFood();
                }
            }
        }
    }
    feedAndUpdateFoodSupply(foodType, foodAmount) {
        return this.foodSupply.isEnoughFood(foodType, foodAmount);
    }
}
exports.Zoo = Zoo;
