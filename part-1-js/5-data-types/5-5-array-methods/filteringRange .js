// Фильтрация по диапазону
// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными "a" и меньше или равными "b" и возвращает результат в виде массива.
let arrNum = [5, 3, 8, 1];
let newArr = [];

function filterRange(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= a && arr[i] <= b) {
      newArr.push(arr[i]);
    }
  }
  return console.log(newArr); // (2) [3, 1]
}

filterRange(arrNum, 1, 4);

// второй вариант

function filterRange2(arr, a, b) {
  let newArr = arr.filter((num) => num >= a && num <= b);
  return console.log(newArr); // (2) [3, 1]
}

filterRange2(arrNum, 1, 4);

// третий вариант
function filterRange3(num) {
  if (num >= 1 && num <= 4) {
    return true;
  }
  return false;
}

console.log(arrNum.filter(filterRange3)); // (2) [3, 1]

// решение JS Info
// function filterRange(arr, a, b) {
//   return arr.filter((item) => a <= item && item <= b);
// }

// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);

// alert(filtered); // 3,1 (совпадающие значения)
// alert(arr); // 5,3,8,1 (без изменений)
