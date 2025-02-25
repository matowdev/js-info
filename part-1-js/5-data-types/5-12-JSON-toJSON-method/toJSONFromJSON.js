// Преобразуйте объект в JSON, а затем обратно в обычный объект
// Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

// ! моё решение
const user = {
  name: 'Василий Иванович',
  age: 35,
};
console.log(user); // { name: "Василий Иванович", age: 35 }

// преобразование объекта в JSON-строку
const userToJSON = JSON.stringify(user);
console.log(userToJSON); // "{"name":"Василий Иванович","age":35}"
console.log(typeof userToJSON); // string

// преобразование JSON-строки обратно в объект
const userFromJSON = JSON.parse(userToJSON);
console.log(userFromJSON); // { name: "Василий Иванович", age: 35 }

// ?? Решение JS Info
let user2 = {
  name: 'Василий Иванович',
  age: 35,
};

let user3 = JSON.parse(JSON.stringify(user2));
console.log(user3); // { name: 'Василий Иванович', age: 35 }
