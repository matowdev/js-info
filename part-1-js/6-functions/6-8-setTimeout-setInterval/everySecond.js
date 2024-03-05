// Вывод каждую секунду
// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

function printNumbers(from, to) {
  let startNum = from;

  let timerId = setInterval(function () {
    console.log(startNum);

    if (startNum === to) {
      clearInterval(timerId);
      setTimeout(() => console.log('Всё..'), 1000);
    }

    startNum++;
  }, 1000);
}

printNumbers(5, 10);

// решение JS Info
// с использованием setTimeout:

// function printNumbers(from, to) {
//   let current = from;

//   setTimeout(function go() {
//     alert(current);
//     if (current < to) {
//       setTimeout(go, 1000);
//     }
//     current++;
//   }, 1000);
// }

// printNumbers(5, 10);
