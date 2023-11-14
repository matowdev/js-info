// Отсортировать пользователей по возрасту
// Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.
// let vasya = { name: 'Вася', age: 25 };
// let petya = { name: 'Петя', age: 30 };
// let masha = { name: 'Маша', age: 28 };

// let arr = [vasya, petya, masha];

// sortByAge(arr);

// теперь: [vasya, masha, petya]
// alert(arr[0].name); // Вася
// alert(arr[1].name); // Маша
// alert(arr[2].name); // Петя

let userVasya = { name: 'Вася', age: 25 };
let userPetya = { name: 'Петя', age: 30 };
let userMasha = { name: 'Маша', age: 28 };

let arrUsers = [userVasya, userPetya, userMasha];

function sortByAge(arrUsers) {
  // let arr = JSON.parse(JSON.stringify(arrUsers));
  return arrUsers.sort((a, b) => a.age - b.age);
}

let newArrUsers = sortByAge(arrUsers);

console.log(newArrUsers); // [userVasya, userMasha, userPetya]
// console.log(arrUsers);

console.log(newArrUsers[0].name); // Вася
console.log(newArrUsers[1].name); // Маша
console.log(newArrUsers[2].name); // Петя

// решение JS Info
// function sortByAge(arr) {
//   arr.sort((a, b) => (a.age > b.age ? 1 : -1));
// }
