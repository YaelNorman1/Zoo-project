export class Food {
    private foodType: string;
    private foodAmount: number;

    constructor(foodType: string, foodAmount: number){
        this.foodType= foodType;
        this.foodAmount= foodAmount;
    }

    printFood(){
        console.log(this.foodType + " the amount in grams: " + this.foodAmount)
    }

    
    public getFoodType() : string {
        return this.foodType
    }

    public getFoodAmount() : number {
        return this.foodAmount
    }
    
    public setFoodAmount(amount: number)  {
        this.foodAmount += amount
    }



}