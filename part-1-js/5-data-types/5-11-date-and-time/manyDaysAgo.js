// Какой день месяца был много дней назад?
// Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.

// функция которая возвращает дату которая была "N" дней назад
function getDateAgo(date, days) {
  date.setDate(date.getDate() - days);
  return date;
}

let currentDate = new Date();

// вызов/вывод результатов
console.log(currentDate); // Wed Nov 29 2023..
console.log(getDateAgo(currentDate, 1)); // Tue Nov 28 2023..
console.log(getDateAgo(currentDate, 2)); // Sun Nov 26 2023..
console.log(getDateAgo(currentDate, 365)); // Sat Nov 26 2022..

// решение JS Info
function getDateAgo2(date, days) {
  let dateCopy = new Date(date);
  dateCopy.setDate(date.getDate() - days);

  return dateCopy.getDate();
}

let currentDate2 = new Date(2015, 0, 2);

console.log(getDateAgo2(currentDate2, 1)); // 1, (1 Jan 2015)
console.log(getDateAgo2(currentDate2, 2)); // 31, (31 Dec 2014)
console.log(getDateAgo2(currentDate2, 365)); // 2, (2 Jan 2014)
