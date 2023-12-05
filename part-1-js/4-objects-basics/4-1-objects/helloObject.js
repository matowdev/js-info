// Привет, object
// Напишите код, выполнив задание из каждого пункта отдельной строкой:
// 1. Создайте пустой объект user.
// 2. Добавьте свойство name со значением John.
// 3. Добавьте свойство surname со значением Smith.
// 4. Измените значение свойства name на Pete.
// 5. Удалите свойство name из объекта.

let user = {};

user.name = 'John';
user.surname = 'Smith';
// console.log(user); // {name: 'John', surname: 'Smith'}

user.name = 'Peter';
// console.log(user); // {name: 'Peter', surname: 'Smith'}

delete user.name;
// console.log(user); // {surname: 'Smith'}

//
// решение JS Info
// let user = {};
// user.name = 'John';
// user.surname = 'Smith';
// user.name = 'Pete';
// delete user.name;
