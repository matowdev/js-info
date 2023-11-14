// Вывести простые числа
// Напишите код, который выводит все простые числа из интервала от 2 до n.

let arrNumbers = [];
let number = arrNumbers;

function outputPrimeNumbers(n) {
  for (let num = 0; num <= n; num++) {
    if (num > 1) {
      arrNumbers.push(num);
    }
  }
  console.log(arrNumbers);
  console.log(number);

  for (let i = 0; i < arrNumbers.length; i++) {
    if (number[0] / arrNumbers[i] == 1) {
      console.log('O da!');
    }
    // console.log(number[0] / arrNumbers[i]);
  }
}

outputPrimeNumbers(10);

// решение JS Info
let n = 10;

nextPrime: for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime; // не подходит, берём следующее
  }

  console.log(i); // "простые" числа: 2, 3, 5, 7
}

// второй вариант
function showPrimes(n) {
  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;
    alert(i); // простое
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}
