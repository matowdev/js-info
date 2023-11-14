// Получить средний возраст
// Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.
// Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.
// Например:
// let vasya = { name: 'Вася', age: 25 };
// let petya = { name: 'Петя', age: 30 };
// let masha = { name: 'Маша', age: 29 };

// let arr = [vasya, petya, masha];

// alert(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28

let userVasya = { name: 'Вася', age: 25 };
let userPetya = { name: 'Петя', age: 30 };
let userMasha = { name: 'Маша', age: 29 };

let arrUsers = [userVasya, userPetya, userMasha];

function getAverageAge(arrUsers) {
  let ageSum = 0;
  for (let i = 0; i < arrUsers.length; i++) {
    ageSum += arrUsers[i].age;
  }
  return ageSum / arrUsers.length;
}

let sumAge = getAverageAge(arrUsers);

console.log(sumAge); // 28

// второй вариант
let sumAge2 = arrUsers.reduce(function (sum, user) {
  return sum + user.age / arrUsers.length;
}, 0);

console.log(sumAge2); // 28

// решение JS Info
function getAverageAge2(arrUsers) {
  return arrUsers.reduce((prev, user) => prev + user.age, 0) / arrUsers.length;
}

console.log(getAverageAge2(arrUsers)); // 28
