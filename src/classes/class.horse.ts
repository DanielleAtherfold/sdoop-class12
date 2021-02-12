import { Farm } from "./class.farm";
import { FarmAnimal, FarmAnimalType } from "./class.farmAnimal";

export class Horse extends FarmAnimal {

    public type = FarmAnimalType.HORSE;

    constructor( _owner:Farm, public name?:string ){
        super(_owner);
    }

    birth():Horse {
        const foal = new Horse(this.owner);
        this.owner.addAnimal(foal);
        return foal;
    }

}