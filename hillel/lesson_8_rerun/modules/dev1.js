import {Employee1} from './employee1.js';
/* На основі ієрархії, побудованоі вище, додати до класу Dev1 статичний метод returnArrayOfDevs,
який буде приймати невизначену кількість
об'єктів, перевіряти що вони є об'єктами класу Dev1 та якщо так - додавати їх у масив та повертати цей масив.
Створити модуль у папці helpers з дефолтним експортом функції sortBySalary (імпорт вже додано вище),
 яка буде сортувати об'єкти по
зростанню зарплати, але якщо зп однакова - то по зростанню id. Приклад виконання нижче.
*/
export class Dev1 extends Employee1 {
    #jobType = 'Dev1';

    getJobType() {
        return `I am a ${this.#jobType}`;
    }

    static returnArrayOfDevs(...objects){
        const devArray = [];
        for (const obj of objects) {
            if (obj instanceof Dev1) {
                devArray.push(obj);
            }
        }
        return devArray;
    }
}