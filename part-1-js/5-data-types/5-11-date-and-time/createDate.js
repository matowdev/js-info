// Создайте дату
// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.

let pastTense = new Date(2012, 1, 20, 3, 12, 0, 0);
console.log(pastTense); // Mon Feb 20 2012 03:12:00 GMT+0400 (Moscow Standard Time)

let pastTense2 = new Date('2012-02-20');
console.log(pastTense2); // Mon Feb 20 2012 04:00:00 GMT+0400 (Moscow Standard Time)

// решение JS Info
let d = new Date(2012, 1, 20, 3, 12);
console.log(d); // Mon Feb 20 2012 03:12:00 GMT+0400 (Moscow Standard Time)
