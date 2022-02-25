export interface IStudent{
    studentNumber: number;
    mobileNumber: number;

    //no body
    getAccountStatus(studentNumber: number):string;
}