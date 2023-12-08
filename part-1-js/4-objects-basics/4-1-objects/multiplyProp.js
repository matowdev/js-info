// Умножаем все числовые свойства на 2
// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

function multiplyNumeric(obj) {
  for (let prop in obj) {
    if (obj[prop] === +obj[prop]) {
      obj[prop] *= 2;
    } else continue;
  }

  return obj;
}

let menu = {
  width: 200,
  height: 300,
  title: 'My menu',
};

let result = multiplyNumeric(menu);
console.log(result); // {width: 400, height: 600, title: 'My menu'}

// решение JS Info
// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] == 'number') {
//       obj[key] *= 2;
//     }
//   }
// }
