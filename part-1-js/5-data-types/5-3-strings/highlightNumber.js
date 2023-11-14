// Выделить число
// Создайте функцию extractCurrencyValue(str), которая будет из строки $120 выделять числовое значение и возвращать его
function extractCurrencyValue(str) {
  return console.log(Number(str.slice(1)));
}

// function extractCurrencyValue(str) {
//   if (str[0] === '$') {
//     return console.log(Number(str.slice(1)));
//   } else {
//     console.log(Number(str));
//   }
// }

extractCurrencyValue('$120');

// решение JS Info
// function extractCurrencyValue(str) {
//   return +str.slice(1);
// }
