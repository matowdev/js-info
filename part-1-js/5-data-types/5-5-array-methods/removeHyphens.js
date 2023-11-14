// Переведите текст вида border-left-width в borderLeftWidth
// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
function camelize(str) {
  let newStr = str.split('-');
  // console.log(newStr); // (2) ['background', 'color']
  for (let i = 1; i < newStr.length; i++) {
    newStr[i] = newStr[i].charAt(0).toUpperCase() + newStr[i].slice(1);
    // console.log(newStr[i]); // Color
  }
  newStr = newStr.join('');
  return console.log(newStr); // backgroundColor
}

camelize('background-color'); // 'backgroundColor';
camelize('list-style-image'); // 'listStyleImage';
camelize('-webkit-transition'); // 'WebkitTransition';

// решение JS Info
// function camelize(str) {
//   return str
//     .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
//     .map(
//       // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
//       // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
//       (word, index) =>
//         index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//     )
//     .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
// }
