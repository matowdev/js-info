// Использование "this" в литерале объекта
// Здесь функция makeUser возвращает объект.
// Каким будет результат при обращении к свойству объекта ref? Почему?

// 'use strict';

function makeUser() {
  return {
    name: 'John',
    ref: this,
  };
}

let user = makeUser();

// console.log(user.ref.name);

console.log(user); // {name: 'John', ref: Window}
console.log(user.ref); // Window {window: Window, self: Window, document: document, name: '', location: Location, …}
console.log(user.ref.name); // пустая строка

// решение JS Info
// Error: Cannot read property 'name' of undefined

// ! в браузере Chrome, version 120 - данный console.log(user.ref.name) выводит "пустую" строку, согласно объекта Window, а не Error..
