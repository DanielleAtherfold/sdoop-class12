import { IAnimal } from "../interfaces/interface.animal";
import { IBusiness, IEntity } from "../interfaces/interface.entity";
import { Farm } from "./class.farm";

export enum FarmAnimalType {

    COW = 'cow',
    HORSE = 'horse'

}

export abstract class FarmAnimal implements IAnimal {

    protected abstract type:FarmAnimalType;
    abstract birth():FarmAnimal;
    
    public set owner( newOwner ){
        this._owner.removeAnimal(this);
        newOwner.addAnimal(this);
        this._owner = newOwner;
    }
    
    public get owner():Farm {
        return this._owner;
    }

    
    constructor( private _owner:Farm ){
        
    }

    sell( newOwner:Farm, price:number ){
        if(newOwner.cashOnHand >= price){
            newOwner.cashOnHand -= price;
            this.owner.cashOnHand += price;
            this.owner = newOwner;
        } else {
            throw new Error("Cannot sell this animal, prospective owner does not have enough cash on hand to complete the sale");
        }
    }

}