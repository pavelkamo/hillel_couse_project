/* 1. Створити модуль api_helper.js, в якому будуть реалізовані функції посилання get та post запитів
та десеріалізація респонсу у json об'єкт, який вони будуть повертати (при реалізації поста зверніть увагу на хедери, 
які вказані у інструкції під блоком Post with JSON). Для створення запитів використати пакет
node-fetch, інструкця по використанню тут https://www.npmjs.com/package/node-fetch?activeTab=readme, для 
реалізації асинхронності використати async/await */

import * as apiHelper from "../lesson_10/api_helper/api_helper.js";
import {postRequest} from "../lesson_10/api_helper/api_helper.js";

const baseUrl = "https://jsonplaceholder.typicode.com/posts/";

/* 2. Реалізувати функцію getPostsByUsedId, яка буде знаходити пости з ресурсу https://jsonplaceholder.typicode.com/posts та робити 
вибірку постів за id користувача. Також у всіх відфільтрованих постів повинна бути відсутня властивість title */

async function getPostsByUsedId(url, userId) {
    try {
        const response = await apiHelper.getRequest(url);
        //Filter all posts by userId
        const filteredArray = response.filter(res => res.userId === userId);
        //Remove all title in each post
        filteredArray.map(postItem =>
            delete postItem.title);
        return filteredArray;
    } catch (e) {
        console.log(e);//TODO add logger to log normally instead of console
    }
}

const posts = await getPostsByUsedId(baseUrl, 5);
console.log(posts); // маємо тільки пости юзера з id = 5, у яких нема title

/* 3. Реалізувати функцію createNewPost, яка буде створювати новий пост на ресурсі https://jsonplaceholder.typicode.com/posts */
const body = {
    userId: 155,
    title: "New title",
    body: "New body",
};

async function createNewPost(url, body) {
    try {
        //Send POST request for creating new postItem
        return await postRequest(url, body);
    } catch (e) {
        console.log(e);//TODO add logger to log normally instead of console
    }
}

const result = await createNewPost(baseUrl, body);
console.log(result); // повинен буди респонс у вигляді { userId: 155, title: 'New title', body: 'New body', id: 101 }

/* 4. Використовуючи синтаксис промісів створити функцію, яка генерує рандомне число від 0 до 10 та з затримкою в 3 секунди
резолвить проміс з результатом "Resolved <число>" у випадку, якщо число більше 5ти, або повертає reject з
результатом "Rejected <число>", якщо число меньше 5ти. Reject обробити через catch. */

/*
Attention
За умовою задачі не вказано, що потрібно робити, коли рандомне число == 5.
Тому добавив функцію, яка буде генерувати рандомне число окрім 5
 */

/**
 * Method to get random number except 5
 * @param topRange max value of random
 * @returns {Promise<number>}
 */
function getRandomNotFive(topRange) {
    while (true) {
        const randomNumber = Math.floor(Math.random() * topRange + 1);
        if (randomNumber !== 5) return randomNumber;
    }
}

function resolveNumber() {
    const DELAY = 3000;
    //Get random number
    const randomNumber = getRandomNotFive(10);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (randomNumber > 5) {
                resolve(randomNumber);
            } else {
                reject(randomNumber);
            }
        })
    }, DELAY);
}

//далі обробка промісу, в консолі або, наприклад, Resolved 7, або Rejected 2 (в залежності від рандомно створенного числа)
resolveNumber()
    .then(result => console.log(`Resolved ${result}`))
    .catch(error => console.log(`Rejected ${error}`));
