"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zoo_1 = require("./zoo");
const mammal_1 = require("./animals/mammal");
const bird_1 = require("./animals/bird");
const fish_1 = require("./animals/fish");
const simba = new mammal_1.Mammal("Simba", "lion", "meat", 6000, 9);
const nala = new mammal_1.Mammal("NALA", "lion", "meat", 6000, 9);
const whale = new mammal_1.Mammal("Willy", "whale", "plankton", 2000000, 22);
const akka = new bird_1.Bird("Akka", "goose", "seeds", 1000, 4);
const hedwig = new bird_1.Bird("Hedwig ", "snowy owl", "worms", 100, 5);
const nemo = new fish_1.Fish("Nemo", "clownfish", "bread", 50, 35);
const marlin = new fish_1.Fish("Marlin", "clownfish", "worms", 100, 50);
const animalArr = [simba, nala, whale, akka, hedwig, nemo, marlin];
const zoo = new zoo_1.Zoo(animalArr);
zoo.printAnimalsZoo();
