import { IEntity } from "../interfaces/interface.entity";

export class Person implements IEntity {

    public get name():string{
        return `${this.firstName} ${this.lastName}`;
    }

    constructor( public firstName:string, public lastName:string ){

    }

}