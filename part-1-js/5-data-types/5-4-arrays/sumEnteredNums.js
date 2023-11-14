// Напишите функцию sumInput(), которая:
// 1. Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// 2. Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// 3. Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

let numArr = [];

// for (let i = 0; i < 1000; i++) {
//   let str = prompt('Введите число', '');
//   arr.push(str);
//   console.log(arr);
// }

function sumInput() {
  let num = prompt('Введите число, от 0 до 10:', '');
  if (num === null) {
    alert('До свидания!');
    return alert(`Вот такая получилась сумма: ${getSum()}`);
  } else if (num === '') {
    alert('Вы ничего не ввели..');
    return sumInput();
  } else if (isNaN(num) === true) {
    alert('Давайте будем вводить только числа!');
    return sumInput();
  } else if (num < 0) {
    alert('Нет, нет.. только положительные числа!');
    return sumInput();
  } else if (num > 10) {
    alert('До 10, пожалуйста!');
    return sumInput();
  }
  num = Math.floor(num);
  numArr.push(num);
  sumInput();
}

sumInput();

function getSum() {
  let sum = 0;
  for (let number of numArr) {
    sum += number;
  }
  return sum;
}

// решение JS Info
// function sumInput() {
//   let numbers = [];
//   while (true) {
//     let value = prompt("Введите число", 0);
//     // Прекращаем ввод?
//     if (value === "" || value === null || !isFinite(value)) break;
//     numbers.push(+value);
//   }

//   let sum = 0;
//   for (let number of numbers) {
//     sum += number;
//   }
//   return sum;
// }

// alert( sumInput() );
