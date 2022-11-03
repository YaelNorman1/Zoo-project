class Animal {
    name : string;
    species: string;
    food: Food;

    constructor(name: string, species: string, foodType: string, foodAmount: number){
        this.name=name;
        this.species= species;
        this.food= new Food(foodType, foodAmount);
    }

}