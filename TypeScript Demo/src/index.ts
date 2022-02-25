import { displayPartsToString } from "../node_modules/typescript/lib/typescript";
import { InternationalStudent } from "./internationalStudent";


let internationalStudent = new InternationalStudent("Brazilian", "Neymar", "Santos");
let divText = document.querySelector('div');
divText!.textContent = internationalStudent.GetFullName() + " " + internationalStudent.GetNationality();

function displayAlert()
{
    return alert('cool!');
}

document.querySelector('#btn-test')!.addEventListener('click', () => displayAlert());


