import Animal = require('./Animal')
class Pigeon extends Animal{
    constructor() {
        super();
        this.setAnimal(4, 3, 15, "Pigeon");
    }
}
export = Pigeon;