import { IBusiness, IEntity } from "../interfaces/interface.entity";

export class Business implements IBusiness {

    public cashOnHand:number = 0;
    
    // owners: polymorphism
    constructor( public name:string, public owners:IEntity[] ){

    }

}