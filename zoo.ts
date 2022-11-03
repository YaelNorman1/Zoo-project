import { FoodSupply } from './food/foodSupply';
import { Animal } from "./animals/animal";
import { Food } from './food/food';

export class Zoo {

    animals: Animal[];
    foodSupply: FoodSupply;

    constructor (animals : Animal[], initFoodSupply: Food[]){
        this.animals= animals;
        this.foodSupply= new FoodSupply(initFoodSupply);
    }

    printAnimalsZoo(){
        this.animals.forEach(animal => animal.printAnimal())
    }

    feedAnimals(){

        for (let day=0; day<14; day++){
            for (const animal of this.animals){
                const animalFoodType= animal.getAnimalFoodType();
                const animalFoodAmount= animal.getAnimalFoodAmount();

                if (this.feedAndUpdateFoodSupply(animalFoodType, animalFoodAmount))
                    console.log("fed " + animal.name + " successfully")
                else {
                    console.log("Need to refill food of ")
                    this.foodSupply.refillFood();
                }

            }
        }
    }

    feedAndUpdateFoodSupply(foodType: string ,foodAmount: number): boolean{
        return this.foodSupply.isEnoughFood(foodType,foodAmount);
    }

   
}

