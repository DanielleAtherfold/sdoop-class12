import { expect } from "chai";
import "mocha";

import { Person } from '../src/classes/class.person';
import { Family } from '../src/classes/class.family';
import { Business } from '../src/classes/class.business';
import { Farm } from '../src/classes/class.farm';

let duttonFamily:Family = new Family("Dutton");
let yellowstoneRanchTrust:Business;
let yellowstoneRanch:Farm;

describe("Yellowstone Test", () => {

    describe('Dutton Family', () => {
        
        it('Should add John to Family and give him family last name', () => {
        
            const john = duttonFamily.add("John");
            expect(john.lastName).to.be.eq(duttonFamily.name);
            
        });

        it('Should add all people to family members', () => {
            
            duttonFamily.add("John");
            duttonFamily.add("Jamie");
            duttonFamily.add("Kayce");
            duttonFamily.add("Beth");
            duttonFamily.add("Tate");
            expect(duttonFamily.members.length).to.be.eq(6);

        })
    
        it('Should add Rip to Family', () => {
    
            const rip = new Person("Rip","Wheeler");
            duttonFamily.add(rip);
            expect(duttonFamily.members).to.include(rip);
    
        });

    });

    describe('Business', () => {

        it('Should store duttonFamily as owner', () => {
            
            yellowstoneRanchTrust = new Business("Yellowstone Trust", [ duttonFamily ]);
            expect( yellowstoneRanchTrust.owners ).to.include( duttonFamily );

        })

    });

    describe('Farm', () => {

        it('Should have same owners as the business', () => {

            yellowstoneRanch = new Farm("Yellowstone Ranch", yellowstoneRanchTrust, "123 Somewhere in Montana", "Plot 1 Lots 1 - 32");
            expect( yellowstoneRanch.owners ).to.include( duttonFamily );
            expect( yellowstoneRanch.business.owners ).to.include( duttonFamily );

        });

    })

})