"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodSupply = void 0;
class FoodSupply {
    constructor(initFoodSupply) {
        this.allFood = [];
        this.allFood = initFoodSupply;
    }
    isEnoughFood(type, amount) {
        for (let food of this.allFood) {
            if (food.getFoodType() == type && food.getFoodAmount() >= amount) {
                food.setFoodAmount(amount);
                return true;
            }
        }
        return false;
        // const elements= this.allFood.filter(food => food.getFoodType() == type && food.getFoodAmount() >= amount)
        // if (elements)
        //     return false
        // else
        //     return true
    }
    refillFood() {
        this.allFood.forEach(food => food.setFoodAmount(1000)); //would like to refill each type different amount. costumise amount in object
    }
}
exports.FoodSupply = FoodSupply;
