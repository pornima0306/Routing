export interface IUser{
    userName  : string;
    userId : number;
}

export interface IProduct{
    pName : string;
    pStatus : string;
    pDetails : string;
    pId : number;

    
}

export interface Ipass{
    fullname : string;
    checkedIn: boolean;
    checkInDate: null | number;
    children : null | Ichild[];
    id : number;
}

export interface Ichild{
    name: string;
    age: number;
}