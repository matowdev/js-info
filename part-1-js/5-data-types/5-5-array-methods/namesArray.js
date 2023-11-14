// Трансформировать в массив имён
// У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.
// Например:
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
// let users = [ vasya, petya, masha ];
// let names = /* ... ваш код */
// alert( names ); // Вася, Петя, Маша

// первое решение
// let userVasya = { name: 'Вася', age: 25 };
// let userPetya = { name: 'Петя', age: 30 };
// let userMasha = { name: 'Маша', age: 28 };

// let arrUsers = [userVasya, userPetya, userMasha];
// let arrNames = [];

// for (let para of arrUsers) {
//   arrNames.push(para.name);
// }

// console.log(arrNames); // ['Вася', 'Петя', 'Маша']

// второе решение

let userVasya = { name: 'Вася', age: 25 };
let userPetya = { name: 'Петя', age: 30 };
let userMasha = { name: 'Маша', age: 28 };

let arrUsers = [userVasya, userPetya, userMasha];

function getName(arrUsers) {
  let arrNames = [];
  for (let para of arrUsers) {
    arrNames.push(para.name);
  }
  return arrNames;
}

let names = getName(arrUsers);

console.log(names); // ['Вася', 'Петя', 'Маша']

// решение JS Info
let vasya = { name: 'Вася', age: 25 };
let petya = { name: 'Петя', age: 30 };
let masha = { name: 'Маша', age: 28 };

let users = [vasya, petya, masha];
let names2 = users.map((item) => item.name);

console.log(names2); // ['Вася', 'Петя', 'Маша']
