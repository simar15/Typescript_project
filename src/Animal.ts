import Organism = require('./Organism')
class Animal extends Organism{
    food: number;
    constructor(){super();};
    //Set the properties
    setAnimal(food: number, water: number, oxygen: number, name: string) {
        this.set(water, oxygen, name);
        this.food = food;
    }
}
export = Animal;