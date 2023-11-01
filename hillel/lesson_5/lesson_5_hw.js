/*
1. 
  Напиши функцію map(fn, array), яка приймає на вхід функцію та масив, 
  та обробляє кожен елемент масиву цією функцією, повертаючи новий масив. 
  Приклад:
*/

// function map(fn, array) {
//   let result = [];
//   for(let i = 0; i < array.length; i++) {
//     result.push(fn(array[i]));
//   }
//   return result;
// }


// //----- Solution #2 -----
// function map(fn, array) {
//   let result = [];
//   for(let element in array) {
//     result.push(fn(element));
//   }
//   return result;
// }

// //----- Solution #3 -----
function map(fn, array) {
    let result = [];
    array.forEach(element => result.push(fn(element)));
    return result;
}

function square(x) {
    return x * x;
} // повертає квадрат числа

console.log(map(square, [1, 2, 3, 4])); // [1, 4, 9, 16]
console.log(map(square, [])); // []

// Зверніть увагу: функція не повинна змінювати переданий їй масив:

let arr = [1, 2, 3];
console.log(map(square, arr)); // [1, 4, 9]
console.log(arr); // [1, 2, 3]

/*
  2. Написати функцію яка форматує текст: 
    - прибирає пробіли з початку і кінця, 
    - прибарає всі зайві пробіли (два і більше підряд)
    - кожне речення починає з великої букви, а всі наступні символи в речені робить маленькими
*/

//----- Attention!!! --- you lost one condition that sentence can not be without '.' or other symbol that shows the end of the sentence
function formatText(text) {
    // Remove leading and trailing spaces
    let trimmedText = text.trim();

    // Replace multiple spaces with a single space
    let singleSpaceText = trimmedText.replace(/\s+/g, ' ');

    // Split the text into sentences and format each sentence
    let sentences = singleSpaceText.split('. ');
    let formattedSentences = sentences.map(sentence => {
        // Capitalize the first letter of the sentence and convert the rest to lowercase
        return sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase();
    });

    // Join the formatted sentences back together
    let formattedText = formattedSentences.join('. ');
    // Check if the text ends with a period
    if (!formattedText.endsWith('.')) {
        // If not, add a period to the end
        formattedText += '.';
    }
    return formattedText;
}


console.log(formatText("heLLo, this is My teXT.   have A NiCe DaY  ")); // "Hello, this is my text. Have a nice day"
console.log(formatText(" Hello woRld   ")); // "Hello world"

/*
    3. Написати функцію, яка поверне число голосних букв в рядку
*/

function countVowels(arr) {
    // Initialize a counter for vowels
    let vowelCount = 0;
    // Iterate over each character in the lowercase string
    for (const char of arr.toLowerCase()) {
        // Check if the character is a vowel (a, e, i, o, u, y)
        if ('aeiouy'.includes(char)) {
            vowelCount++;
        }
    }
    return vowelCount;
}


console.log("Vowels: " + countVowels("aaaat")); // виводить 4
console.log("Vowels: " + countVowels("Hello world")); // виводить 3

/*
  Task 3.1 Count vowels, consonants, symbols, digits
 */

function countCharacters(inputString) {
    let vowels = 0;
    let consonants = 0;
    let symbols = 0;
    let digits = 0;
    let uppercaseLetters = 0;
    let lowercaseLetters = 0;

    // Iterating over each character in the input string
    for (const char of inputString) {
        if (/[aeiouy]/i.test(char)) {
            // If the character is a vowel
            vowels++;
        } else if (/[bcdfghjklmnpqrstvwxyz]/i.test(char)) {
            // If the character is a consonant
            consonants++;
        } else if (/[!@#$%^&*()_+{}\[\]:;<>,.?~\\|/]/.test(char)) {
            // If the character is a symbol
            symbols++;
        } else if (/[0-9]/.test(char)) {
            // If the character is a digit
            digits++;
        } else if (/[A-Z]/.test(char)) {
            // If the character is an uppercase letter
            uppercaseLetters++;
        } else if (/[a-z]/.test(char)) {
            // If the character is a lowercase letter
            lowercaseLetters++;
        }
    }

    return {
        vowels,
        consonants,
        symbols,
        digits,
        uppercaseLetters,
        lowercaseLetters,
    };
}

// Example of using the function:
const inputString = "Hello, World! 123";
const result = countCharacters(inputString);
console.log("Vowels:", result.vowels);
console.log("Consonants:", result.consonants);
console.log("Symbols:", result.symbols);
console.log("Digits:", result.digits);
console.log("Uppercase Letters:", result.uppercaseLetters);
console.log("Lowercase Letters:", result.lowercaseLetters);

/*
    4. Написати функцію, яка видаляє всі спеціальні символи зі строки (залишає лише числа, букви і пробіли в будь-якому регістрі)
*/
//----- Solution #4.0 -----
// function clearStr(str){
// // String of special symbols to remove
//     const specialSymbols = "!@#$%^&*()_+[]{};:'\"\\|,.<>?/~`-=";
//     let cleanedString = "";
//     // Loop through each character in the input string
//     for (const index in str) {
//         const char = str[index];
//         if (specialSymbols.indexOf(char) === -1) {
//             cleanedString += char;
//         }
//     }
//     return cleanedString;
// }

//----- Solution #4.1 -----
// function clearStr(str){
//     // String of special symbols to remove
//     const specialSymbols = "!@#$%^&*()_+[]{};:'\"\\|,.<>?/~`-=";
//     let cleanedString = "";
//     // Loop through each character in the input string
//     for (let i = 0; i < str.length; i++) {
//         const char = str[i];
//         // Check if the character is not in the special symbols string
//         if (!specialSymbols.includes(char)) {
//             // If the character is not a special symbol, add it to the cleaned result
//             cleanedString += char;
//         }
//     }
//     return cleanedString;
// }

//----- Solution #4.2 -----
function clearStr(str) {
    return str.replace(/[^A-Za-z0-9\s]/g, '');
}

    console.log(clearStr("My var: 22 ")); // виведе "My var 22"
    console.log(clearStr("Foo %$#% bar")); // виведе "Foo bar"
    console.log(clearStr("; SELECT * FROM passwords ")); // виведе "SELECT FROM passwords" TODO here wrong expected result

