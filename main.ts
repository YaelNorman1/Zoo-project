import { Food } from './food/food';
import { Zoo } from "./zoo";
import { Mammal } from "./animals/mammal";
import { Bird } from "./animals/bird";
import { Fish } from "./animals/fish";

const simba= new Mammal("Simba", "lion", "meat", 0, 9);
const nala= new Mammal("Nala", "lion", "meat", 6000, 9);
const whale= new Mammal("Willy", "whale","plankton",2000000,22);
const akka= new Bird("Akka", "goose", "seeds",1000, 4);
const hedwig= new Bird("Hedwig ", "snowy owl", "worms",100, 5);
const nemo= new Fish("Nemo", "clownfish", "seeds", 50, 35);
const marlin= new Fish("Marlin", "clownfish", "worms", 0, 50);

const animalArr= [simba,nala,whale,akka,hedwig,nemo,marlin];
const initFoodSupply= [
    new Food("meat" ,1000000),
    new Food("seeds" , 3000),
    new Food("worms", 500),
    new Food("plankton" , 5000000)
]


const zoo= new Zoo(animalArr, initFoodSupply);

zoo.printAnimalsZoo()
zoo.feedAnimals()