import Animal = require('./Animal')
class Parrot extends Animal {
    constructor() {
        super();
        this.setAnimal( 3, 2, 18, "Parrot");
    }
}
export = Parrot;