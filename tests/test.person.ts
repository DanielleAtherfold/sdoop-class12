import { expect } from "chai";
import "mocha";

import { Person } from '../src/classes/class.person';

describe('Person', () => {
    
    it('Should Store Name', () => {
        const person = new Person("Bradley","Holbrook");
        expect(person.firstName).to.be.eq("Bradley");
        expect(person.lastName).to.be.eq("Holbrook");
        expect(person.name).to.be.eq("Bradley Holbrook");
    })
    
})