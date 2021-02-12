import { IBusiness, IEntity } from "../interfaces/interface.entity";

export class Business implements IBusiness {

    // owners: polymorphism
    constructor( public name:string, public owners:IEntity[] ){

    }

}