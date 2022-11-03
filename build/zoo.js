"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Zoo = void 0;
class Zoo {
    constructor(animals) {
        this.animals = animals;
    }
    addAnimal() { }
    printAnimalsZoo() {
        this.animals.forEach(animal => animal.printAnimal());
    }
}
exports.Zoo = Zoo;
