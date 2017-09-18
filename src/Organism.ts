 class Organism {
        name: string;
        water: number;
        oxygen: number;
        constructor(){};
        set(water: number, oxygen: number, name: string) {
            this.name = name;
            this.water = water;
            this.oxygen = oxygen;
        }

    }
    export = Organism;