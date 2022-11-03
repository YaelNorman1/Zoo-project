import { Animal } from "./animals/animal";

export class Zoo {

    animals: Animal[];

    constructor (animals : Animal[]){
        this.animals= animals;
    }

    addAnimal(){}

    printAnimalsZoo(){
        this.animals.forEach(animal => animal.printAnimal())
    }
    
}

