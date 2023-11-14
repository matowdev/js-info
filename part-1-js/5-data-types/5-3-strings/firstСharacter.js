// Сделать первый символ заглавным
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом
function ucFirst(str) {
  str = str[0].toUpperCase() + str.slice(1);
  return console.log(str);
}

ucFirst('вася'); // Вася
ucFirst('петя'); // Петя
// ucFirst(''); // error

// решение JS info
function ucFirst2(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst2('миша')); // Миша
console.log(ucFirst2('саша')); // Саша
console.log(ucFirst2('')); // пустая строка, не ошибка
