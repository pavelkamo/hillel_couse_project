/* Створити базовий клас Employee1 з властивостями id, salary та статичним методом для порівняння властивостей salary, який
  повертає строку з тесктом User with id ... has greater salary, або у випадку рівності значень
  повертає salaries are equal. Створити два класи Dev1 та PM, які успадковують клас Employee1 та кожен
  по своєму реалізує метод getJobType(), використовуючи для jobType приватну властивість. Кожен з класів 
  повинен бути організований у окремому модулі, які лежать у папці modules. Приклад імпортів та викликів нижче.*/

import { Dev1 } from "./modules/dev1.js";
import { Pm1 } from "./modules/pm1.js";
import { Employee1 } from "./modules/employee1.js";
import sortBySalary from "../lesson_8_rerun/helpers/sorter.js";


const dev = new Dev1(1, 2000);
const pm = new Pm1(2, 2500);
const dev2 = new Dev1(3, 2000);
console.log(dev.getJobType()); // виведе I am a Dev1
console.log(pm.getJobType()); // виведе I am a PM
console.log(Employee1.compareSalary(dev, pm)); // виведе User with id 2 has greater salary
console.log(Employee1.compareSalary(dev, dev2)); // виведе salaries are equal

/* На основі ієрархії, побудованої у попередньому завданні, створити об'єкт класу Dev1,
   зробити властивість id незмінною та унеможливити її видалення. Строки для перевірки
   зміни чи видалення властивості можна коментувати для перевірки роботи скрипта у подальшому. */

const newDev = new Dev1(1, 3000);

Object.defineProperty(newDev, 'id', {
    value: newDev.id,
    writable: false,
    configurable: false
});


// newDev.id = 15; // видасть помилку TypeError: Cannot assign to read only property 'id' of object '#<Dev1>'
// delete newDev.id; // видасть помилку TypeError: Cannot delete property 'id' of #<Dev1>
for (let key in newDev) {
  console.log(newDev[key]); // виведе почергово 1 та 3000
}

/* На основі ієрархії, побудованоі вище, додати до класу Dev1 статичний метод returnArrayOfDevs,
який буде приймати невизначену кількість
об'єктів, перевіряти що вони є об'єктами класу Dev1 та якщо так - додавати їх у масив та повертати цей масив.
Створити модуль у папці helpers з дефолтним експортом функції sortBySalary (імпорт вже додано вище),
 яка буде сортувати об'єкти по
зростанню зарплати, але якщо зп однакова - то по зростанню id. Приклад виконання нижче.
*/
const user1 = new Dev1(1, 2000);
const user2 = new Dev1(2, 1500);
const user3 = new Dev1(3, 1000);
const user4 = new Dev1(4, 2000);
const user5 = new Dev1(6, 2500);
const user6 = new Dev1(5, 2500);
const user7 = new Pm1(7, 3500);
const user8 = new Pm1(8, 1000);
const users = Dev1.returnArrayOfDevs(
  user1,
  user2,
  user3,
  user4,
  user5,
  user6,
  user7,
  user8
);

console.log(users);
console.log(sortBySalary(users)); /*
// виведе [
//   Dev1 { id: 3, salary: 1000 },
//   Dev1 { id: 2, salary: 1500 },
//   Dev1 { id: 1, salary: 2000 },
//   Dev1 { id: 4, salary: 2000 },
//   Dev1 { id: 5, salary: 2500 },
//   Dev1 { id: 6, salary: 2500 }
// ]
// */
