import { IEntity } from '../interfaces/interface.entity';
import { Person } from './class.person';

export class Family implements IEntity {

    private _members:Person[] = [];
    
    public get members():Person[]{
        return this._members;
    }

    constructor( public name:string ){
        
    }

    add( person:string ):Person;
    add( person:Person ):void;
    add( person:Person|string ):Person|void {

        if( person instanceof Person ){
            this._members.push(person);
        }

        else {
            const p = new Person(person, this.name);
            this._members.push(p);
            return p;
        }

    }
}