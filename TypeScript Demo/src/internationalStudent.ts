import { Student } from "./student";

export class InternationalStudent extends Student {


    nationality: string;

    constructor(nationality: string, firstname: string, lastname: string)
    {
        super(firstname, lastname);
        this.nationality = nationality;
    }

    GetNationality():string
    {
        return `Nationality: ${this.nationality}`;
    }
}


