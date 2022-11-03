"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Food = void 0;
class Food {
    constructor(foodType, foodAmount) {
        this.foodType = foodType;
        this.foodAmount = foodAmount;
    }
    printFood() {
        console.log(this.foodType + " the amount in grams: " + this.foodAmount);
    }
}
exports.Food = Food;
