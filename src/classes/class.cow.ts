import { FarmAnimal, FarmAnimalType } from "./class.farmAnimal";

export class Cow extends FarmAnimal {

    public type = FarmAnimalType.COW;

    birth():Cow{
        const cow = new Cow(this.owner);
        this.owner.addAnimal(cow);
        return cow;
    }

}