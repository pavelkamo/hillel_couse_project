/*
1. Написати функцію, яка перетворює строку на масив слів,
    сортує його за алфавітним порядком і повертає (у масиві не повинно бути пробілів як елементів)
 */

const str = "Це довільний текст для створення масиву слів ";
//Version 1.1
function stringToArray(inputString) {
    // Split the string into an array of words
    let wordsArray = inputString.trim().split(' ');
    // Sort the array of words
    wordsArray.sort((a, b) => a.localeCompare(b));
    // Print the sorted array
    return wordsArray;
}

console.log(stringToArray(str));    // виводить [ 'для', 'довільний', 'масиву', 'слів', 'створення', 'текст', 'це' ]

/*
2. Написати функцію, яка видаляє з масива елементи, що дублюються, та повертає масив оригінальних елементів,
відсортованих за зростанням
 */
const initialArray = [1, 4, 6, 6, 7, 5, 34, 5, 66, 1000, 1];
//Version 2.1
function removeDuplicatesAndSort(arr) {
    arr.sort((a, b) => a - b);
    return [... new Set(arr)];
}

console.log(removeDuplicatesAndSort(initialArray)); // виводить [ 1, 4, 5, 6, 7, 34, 66, 1000 ]
/*
3. Написати функцію, яка поверне масив парних чисел
 */
const initialArray2 = [2, 3, 6, 7, 9, 12];
//Version 3.1
// function arrayOfEvens(arr) {
//     let evenNumbers = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]%2 === 0) {
//             evenNumbers.push(arr[i]);
//         }
//     }
//     return evenNumbers;
// }

//Version 3.2
function arrayOfEvens(arr) {
    return arr.filter(function (number) {
        return number % 2 === 0;
    })
}

console.log(arrayOfEvens(initialArray2)); // виводить [ 2, 6, 12 ]

/*
4. Написати функцію, яка сформує масив з послідовності чисел, формуючи його з аргумента, який збільшує
кожний наступний елемент послідовності на самого себе. Максимальне значення масиву не повинно перевищувати число 30.
 */
function createArray(element) {
    const resultArray = [];
    function generateNextElement(currentElement) {
        const nextElement = currentElement + element;
        if (nextElement <= 30) {
            resultArray.push(nextElement);
            generateNextElement(nextElement);
        }
    }
    resultArray.push(element); // Include the starting number in the result
    generateNextElement(element);
    return resultArray;
}

console.log(createArray(5)); // виведе [ 5, 10, 15, 20, 25, 30 ]
console.log(createArray(3)); // виведе [ 3,  6,  9, 12, 15, 18, 21, 24, 27, 30 ]
