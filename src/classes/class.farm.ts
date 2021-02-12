import { IAnimal } from "../interfaces/interface.animal";
import { IBusiness, IEntity, ILocation } from "../interfaces/interface.entity";
import { Business } from "./class.business";

export class Farm implements IBusiness, ILocation {
   
    // encapsulation
    private _owner:Business;

    // abstraction
    public get owners():IEntity[]{
        return this._owner.owners;
    }

    // abstraction, encapsulation
    public get business():Business{
        return this._owner;
    }

    public set cashOnHand( value:number ){
        this.business.cashOnHand = value;
    }
    
    public get cashOnHand():number {
        return this.business.cashOnHand;
    }

    private _animals:IAnimal[] = [];

    public get animals():IAnimal[]{
        return this._animals;
    }

    constructor( public name:string, business:Business, public civic:string, public legal:string ){
        // encapsulation
        this._owner = business;
    }

    addAnimal( animal:IAnimal ){
        this._animals.push(animal);
    }

    removeAnimal( animal:IAnimal ){
        // TODO: remove an animal from a farm
    }

}



