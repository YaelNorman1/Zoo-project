import { Food } from "../food/food";

export class Animal {
    name : string;
    species: string;
    food: Food;

    constructor(name: string, species: string, foodType: string, foodAmount: number){
        this.name=name;
        this.species= species;
        this.food= new Food(foodType, foodAmount);
    }

    printAnimal(){
        console.log(this.name + "is a kind of: " + this.species + "it eats: ");
        this.food.printFood();
    }

}