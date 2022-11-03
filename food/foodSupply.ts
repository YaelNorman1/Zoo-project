import { Food } from "./food";


export class FoodSupply{
    allFood: Food[]=[];

    constructor(initFoodSupply: Food[]){
        this.allFood=initFoodSupply;
    }

    isEnoughFood(type: string, amount: number){
        for (let food of this.allFood){
            if (food.getFoodType() == type && food.getFoodAmount() >= amount){
                food.setFoodAmount(amount)
                return true
            }
        }
        return false

        // const elements= this.allFood.filter(food => food.getFoodType() == type && food.getFoodAmount() >= amount)
        // if (elements)
        //     return false
        // else
        //     return true
    }

    refillFood(){
        this.allFood.forEach(food => food.setFoodAmount(1000)) //would like to refill each type different amount. costumise amount in object
    }

}