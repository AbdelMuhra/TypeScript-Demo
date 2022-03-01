import { IStudent } from "./istudent";


export class Student implements IStudent{
    firstname: string;
    lastname: string;

    constructor(firstname: string, lastname:string, studentnumber:number, mobilenumber:number)
    {
        this.firstname = firstname;
        this.lastname = lastname;
        this.studentNumber = studentnumber;
        this.mobileNumber = mobilenumber;
    }
    studentNumber: number;
    mobileNumber: number;
    getAccountStatus(studentNumber: number): string {
        throw new Error("Method not implemented.");
    }

    GetFullName():string{
        return `Student: ${this.firstname} ${this.lastname}`;
    }
    GetStudentNum():string{
        return `Student Number: ${this.studentNumber}`
    }
    GetMobileNum():string{
        return `Mobile Number: ${this.mobileNumber}`
    }
}

// let student = new Student("Peter", "Parker");
// let fullname: string = student.GetFullName();

// let divText = document.querySelector('div');
// divText!.textContent = fullname;