import { IStudent } from "./istudent";


export class Student implements IStudent{
    firstname: string;
    lastname: string;

    constructor(firstname: string, lastname:string)
    {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    studentNumber: number;
    mobileNumber: number;
    getAccountStatus(studentNumber: number): string {
        throw new Error("Method not implemented.");
    }

    GetFullName():string{
        return `Student: ${this.firstname} ${this.lastname}`;
    }
}

// let student = new Student("Peter", "Parker");
// let fullname: string = student.GetFullName();

// let divText = document.querySelector('div');
// divText!.textContent = fullname;