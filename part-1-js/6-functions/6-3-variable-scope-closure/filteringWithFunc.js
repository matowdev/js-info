// Фильтрация с помощью функции
// У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f. Если она возвращает true, то элемент добавится в возвращаемый массив.
// Сделайте набор «готовых к употреблению» фильтров:
// inBetween(a, b) – между a и b (включительно).
// inArray([...]) – находится в данном массиве.

// второй/первый вариант реализации функции inBetween

// let mainArr2 = [1, 2, 3, 4, 5, 6, 7];

// function inBetween2(a, b, arr = []) {
//   if (arr.length === 0) {
//     return;
//   }

//   let startIndex = 0;
//   let endIndex = arr.length - 1;

//   for (let i in arr) {
//     let newNum = Number(i);

//     if (arr[newNum] === a) {
//       startIndex = newNum;
//     }

//     if (arr[newNum] === b) {
//       endIndex = newNum;
//     }
//   }

//   return arr.slice(startIndex, endIndex + 1).join(', ');
// }

// let newArr2 = inBetween2(3, 6, mainArr2);
// console.log(`Результат/между: ${newArr2}` || `Пустой массив..`); // 3, 4, 5, 6

// ---

let mainArr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(a, b, arr = []) {
  if (arr.length === 0) {
    return;
  }

  let startIndex = 0;
  let endIndex = arr.length - 1;

  for (let [i, value] of arr.entries()) {
    if (value === a) {
      startIndex = i;
    }

    if (value === b) {
      endIndex = i;
    }
  }

  return arr.slice(startIndex, endIndex + 1).join(', ');
}

let newArr = inBetween(3, 6, mainArr);

if (newArr) {
  console.log(`Результат/между: ${newArr}`); // 3, 4, 5, 6
} else {
  console.log(`Пустой массив..`);
}

// ---

function inArray(arr = []) {
  if (arr.length === 0) {
    return;
  }

  let newArr = [];

  for (let i = 0; i < mainArr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (mainArr[i] === arr[j]) {
        newArr.push(arr[j]);
      }
    }
  }

  return newArr.join(', ');
}

let newArr2 = inArray([1, 2, 10]);

if (newArr2) {
  console.log(`Совпадают следующие значения: ${newArr2}`); // 1, 2
} else {
  console.log(`Пустой массив..`);
}

// ---
// и такие реализации

function inBetween2(a, b) {
  return function (x) {
    return x >= a && x <= b;
  };
}

function inArray2(arr = []) {
  return function (x) {
    return arr.includes(x);
  };
}

console.log(mainArr.filter(inBetween2(3, 6))); // [3, 4, 5, 6]
console.log(mainArr.filter(inArray2([1, 2, 10]))); // [1, 2]
