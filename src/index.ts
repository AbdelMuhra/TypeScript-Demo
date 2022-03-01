import { displayPartsToString } from "../node_modules/typescript/lib/typescript";
import { InternationalStudent } from "./internationalStudent";


let internationalStudent = new InternationalStudent("Brazilian", "Neymar", "Santos", 10, 123456789);
let divText = document.querySelector('div');
divText!.textContent = internationalStudent.GetFullName() + " " + internationalStudent.GetNationality() +
 "\n" + internationalStudent.GetStudentNum() + " " + internationalStudent.GetMobileNum();

function displayAlert()
{
    return alert('cool!');
}

document.querySelector('#btn-test')!.addEventListener('click', () => displayAlert());


