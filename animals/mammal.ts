class Mammal extends Animal{

    durationPregnency: number; 

    constructor(name: string,species: string, foodType: string, foodAmount: number, durationPregnency: number){
        super(name,species,foodType,foodAmount)
        this.durationPregnency= durationPregnency;
    }

    getDurationPregnency(){
        return this.durationPregnency;
    }

}