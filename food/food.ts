export class Food {
    foodType: string;
    foodAmount: number;

    constructor(foodType: string, foodAmount: number){
        this.foodType= foodType;
        this.foodAmount= foodAmount;
    }

    printFood(){
        console.log(this.foodType + " the amount in grams: " + this.foodAmount)
    }
}