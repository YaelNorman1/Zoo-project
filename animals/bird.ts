import { Animal } from "./animal";


export class Bird extends Animal{

    wingSpan: number; 

    constructor(name: string, species: string, foodType: string, foodAmount: number, wingSpan: number){
        super(name,species,foodType,foodAmount)
        this.wingSpan= wingSpan;
    }

    getWingSpan(){
        return this.wingSpan;
    }

    printAnimal(){
        super.printAnimal()
        console.log("the duration of pregnancy is: " + this.wingSpan)
    }

}