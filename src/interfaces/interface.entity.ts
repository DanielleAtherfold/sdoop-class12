export interface IEntity {

    name: string;

}

export interface IBusiness extends IEntity {

    owners: IEntity[];
    cashOnHand: number;

}

export interface IPerson extends IEntity {

    firstName: string;
    lastName: string;

}

export interface ILocation {

    civic:string;
    legal:string;

}