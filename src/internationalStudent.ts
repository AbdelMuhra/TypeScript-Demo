import { Student } from "./student";

export class InternationalStudent extends Student {


    nationality: string;

    constructor(nationality: string, firstname: string, lastname: string, studentnumber: number, mobilenumber: number)
    {
        super(firstname, lastname,studentnumber, mobilenumber);
        this.nationality = nationality;
    }

    GetNationality():string
    {
        return `Nationality: ${this.nationality}`;
    }
}


