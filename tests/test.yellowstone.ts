import { expect } from "chai";
import "mocha";

import { Person } from '../src/classes/class.person';
import { Family } from '../src/classes/class.family';
import { Business } from '../src/classes/class.business';
import { Farm } from '../src/classes/class.farm';

import { Horse } from '../src/classes/class.horse';
import { Cow } from '../src/classes/class.cow';
import { FarmAnimalType } from '../src/classes/class.farmAnimal';

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
            expect( yellowstoneRanch.owners ).to.include.members([ duttonFamily ]);
            expect( yellowstoneRanch.business.owners ).to.include.members([ duttonFamily ]);

        });

    });

    describe('Farm Animals', () => {

        const farm2 = new Farm("ShyLynn Ranch", new Business("ShyLynn Ranch Ltd", [ new Person("Angie","Ross") ]), "Silver Creek", "");
        farm2.cashOnHand = 10000;

        describe('Horse', () => {

            it('Should be a horse (of course)', () => {

                const horse = new Horse( yellowstoneRanch, "Skittles" );
                expect(horse.type).to.be.eq( FarmAnimalType.HORSE );

            });

            it('Should be sold to another farm', () => {

                const horse = new Horse( yellowstoneRanch, "Skittles" );
                horse.sell(farm2, 1000);
                expect(farm2.animals).to.include.members([ horse ]);
                expect(yellowstoneRanch.animals).to.not.include.members([ horse ]);

            });

        });

        describe('Cow', () => {
            
            it('Should be a cow (oh wow)', () => {

                const cow = new Cow( farm2 );
                expect(cow.type).to.be.eq( FarmAnimalType.COW );

            });
            
            it('Should not be sold to a farm with not enough money', () => {

                const cow = new Cow( farm2 );
                expect(() => cow.sell(yellowstoneRanch, 2000)).to.throw("Cannot sell this animal, prospective owner does not have enough cash on hand to complete the sale");
                //expect(farm2.animals).to.include.members([ cow ]);
                //expect(yellowstoneRanch.animals).to.not.include.members([ cow ]);

            });

        });

    })

})