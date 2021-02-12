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

    constructor( public name:string, business:Business, public civic:string, public legal:string ){
        // encapsulation
        this._owner = business;
    }

}



