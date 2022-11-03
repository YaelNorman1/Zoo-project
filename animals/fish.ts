class Fish extends Animal{

    lowestDepth: number; 

    constructor(name: string,species: string, foodType: string, foodAmount: number, lowestDepth: number){
        super(name,species,foodType,foodAmount)
        this.lowestDepth= lowestDepth;
    }

    getLowestDepth(){
        return this.lowestDepth;
    }

}