// Фильтрация по диапазону "на месте"
// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

// let arrNum = [5, 3, 8, 1].sort();
// console.log(arrNum); // (4) [1, 3, 5, 8]

// ---
// function sortInPlace(a, b) {
//   if (a > b) return 1;
//   if (a == b) return 0;
//   if (a < b) return -1;
// }

// let arrNum = [5, 3, 8, 1].sort(sortInPlace);

// console.log(arrNum); // (4) [1, 3, 5, 8]

// ---
// var numbers = [5, 3, 8, 1];
// numbers.sort(function (a, b) {
//   return a - b;
// });

// console.log(numbers); // [1, 3, 5, 8]

// ---
// let arr = [1, 2, 15];
// arr.sort((a, b) => a - b);

// console.log(arr); // [1, 2, 15]

// --
let numArr = [0, 5, 3, 8, 1, 2, 11, -3, 22, 2];
let newNumArr = [];

function sortRangeInPlace(arr, a, b) {
  for (let i = 0; i < numArr.length; i++) {
    if (arr[i] >= a && arr[i] <= b) {
      newNumArr.push(arr[i]);
    }
  }
  return console.log(newNumArr); // [3, 1, 2, 2]
}

sortRangeInPlace(numArr, 1, 4);

// второй вариант
let numsArr = [0, 5, 3, 8, 1, 2, 11, -3, 22, 2];

function filterRangeInPlace(arr, a, b) {
  return arr.filter((num) => num >= a && num <= b).sort((a, b) => a - b);
}

let newArr = filterRangeInPlace(numsArr, 1, 4);

console.log(newArr); // [1, 2, 2, 3]

// решение JS Info
function filterRangeInPlace2(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    // удалить, если за пределами интервала
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

let arr = [5, 3, 8, 1];

filterRangeInPlace2(arr, 1, 4); // удалены числа вне диапазона 1..4

console.log(arr); // [3, 1]
