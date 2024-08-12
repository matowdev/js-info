// Получите данные о пользователях GitHub
// Создайте асинхронную функцию getUsers(names), которая получает на вход массив логинов пользователей GitHub, запрашивает у GitHub информацию о них и возвращает массив объектов-пользователей.
// Информация о пользователе GitHub с логином USERNAME доступна по ссылке: https://api.github.com/users/USERNAME.
// Важные детали:
// - На каждого пользователя должен приходиться один запрос fetch.
// - Запросы не должны ожидать завершения друг друга. Надо, чтобы данные приходили как можно быстрее.
// - Если какой-то запрос завершается ошибкой или оказалось, что данных о запрашиваемом пользователе нет, то функция должна возвращать null в массиве результатов.

// ?? моё решение
// ** реализация 1
async function getUsers(namesArr = []) {
  const usersArr = [];

  for (const name of namesArr) {
    try {
      const response = await fetch(`https://api.github.com/users/${name}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const userData = await response.json();
      usersArr.push(userData);
    } catch (error) {
      console.error(`Error fetching user data for ${name}:`, error.message);
      usersArr.push(null);
    }
  }

  return usersArr;
}

const namesArr = ['mato', 'mato-dev', 'mato88', 'matowdev'];
const resultUsersArr = getUsers(namesArr);

console.log(resultUsersArr); // Promise {<pending>}..
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: Array(4)

// ** реализация 2
async function getUsers2(namesArr = []) {
  const requests = namesArr.map(async (name) => {
    try {
      const response = await fetch(`https://api.github.com/users/${name}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const userData = await response.json();
      return userData;
    } catch (error) {
      console.error(`Error fetching user data for ${name}:`, error.message);
      return null;
    }
  });

  const usersArr = await Promise.all(requests);
  return usersArr;
}

const namesArr2 = ['mato', 'mato-dev', 'mato88', 'matowdev'];

getUsers2(namesArr2).then((resultUsersArr2) => {
  console.log(resultUsersArr2); // [{…}, {…}, {…}, {…}]
  // 0. {login: 'mato', id: 190797, node_id: 'MDQ6VXNlcjE5MDc5Nw==', avatar_url: …}
  // 1. {login:'mato-dev', id: 71024524, node_id: 'MDQ6VXNlcjcxMDI0NTI0', avatar_url: …}
  // 2. {login:'mato88', id: 115821391, node_id: 'U_kgDOBudLTw', avatar_url: …}
  // 3. {login:'matowdev', id: 79189126, node_id: 'MDQ6VXNlcjc5MTg5MTI2', avatar_url: …}]
});

// ! или через IIFE (что бы явно объявить переменную resultUsersArr)..

// (async () => {
//   const namesArr2 = ['mato', 'mato-dev', 'mato88', 'matowdev']; // смотри что бы не дублировался массив
//   const resultUsersArr2 = await getUsers2(namesArr2);

//   console.log(resultUsersArr2);
// })();

// ?? Решение JS Info
async function getUsers(names) {
  let jobs = [];

  for (let name of names) {
    let job = fetch(`https://api.github.com/users/${name}`).then(
      (successResponse) => {
        if (successResponse.status != 200) {
          return null;
        } else {
          return successResponse.json();
        }
      },
      (failResponse) => {
        return null;
      }
    );
    jobs.push(job);
  }

  let results = await Promise.all(jobs);

  return results;
}

// Пожалуйста, обратите внимание: вызов .then прикреплён к fetch, чтобы, когда ответ получен, сразу начинать считывание данных с помощью .json(), не дожидаясь завершения других запросов.
// Если бы мы использовали await Promise.all(names.map(name => fetch(...))) и вызывали бы .json() на результатах запросов, то пришлось бы ждать, пока завершатся все из них. Вызывая .json() сразу после каждого fetch, мы добились того, что считывание присланных по каждому запросу данных происходит независимо от других запросов.
// Это пример того, как относительно низкоуровневое Promise API может быть полезным, даже если мы в основном используем async/await в коде.
