// Оставить уникальные элементы массива
// Пусть arr – массив строк. Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.
// Например:
// function unique(arr) {
//   /* ваш код */
// }

// let strings = [
//   'кришна',
//   'кришна',
//   'харе',
//   'харе',
//   'харе',
//   'харе',
//   'кришна',
//   'кришна',
//   ':-O',
// ];

// alert(unique(strings)); // кришна, харе, :-O

let arrStrings = [
  'кришна',
  'кришна',
  'харе',
  'харе',
  'харе',
  'харе',
  'кришна',
  'кришна',
  ':-O',
];

function unique(arrStrings) {
  let tempArr = [];
  let unicStr = arrStrings.find((str) => str === 'кришна');
  tempArr.push(unicStr);
  let unicStr2 = arrStrings.find((str) => str === 'харе');
  tempArr.push(unicStr2);
  let unicStr3 = arrStrings.find((str) => str === ':-O');
  tempArr.push(unicStr3);
  return tempArr;
}

let unicArr = unique(arrStrings);

console.log(unicArr); // ['кришна', 'харе', ':-O']

// втрое решение
function unique2(arrStrings) {
  let unicArr = [];
  for (let unicStr of arrStrings) {
    if (!unicArr.find((x) => x === unicStr)) {
      unicArr.push(unicStr);
    }
  }
  return unicArr;
}

let newArr2 = unique2(arrStrings);

console.log(newArr2); // ['кришна', 'харе', ':-O']

// решение JS Info
function unique3(arrStrings) {
  let result = [];

  for (let str of arrStrings) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

console.log(unique(arrStrings)); // кришна, харе, :-O
