// Перепишите 'if' в '?'
// Перепишите конструкцию if с использованием условного оператора '?'
// let result;
// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }

function printResult(a, b) {
  let result;
  a + b < 4 ? (result = 'Маловато.. будет:') : (result = 'Многовато.. будет:');
  return console.log(result + ' ' + (a + b));
}

printResult(2, 5); // Многовато.. будет: 7
printResult(1, 2); // Маловато.. будет: 3

// решение JS Info
// result = (a + b < 4) ? 'Мало' : 'Много';
