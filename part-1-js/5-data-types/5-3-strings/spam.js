// Проверка на спам
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false
function checkSpam(str) {
  str = str.toLowerCase();
  if (str.includes('viagra') || str.includes('xxx')) {
    return console.log('Запретная тема! Спам!');
  }
  return console.log('Тема: ' + str + ' ..давайте пообсуждаем!?');
}

checkSpam('buy ViAgRA now'); // Запретная тема! Спам!
checkSpam('free xxxxx'); // Запретная тема! Спам!
checkSpam('innocent rabbit'); // Тема: innocent rabbit ..давайте пообсуждаем!?

// решение JS Info
// function checkSpam(str) {
//   let lowerStr = str.toLowerCase();
//   return lowerStr.includes('viagra') || lowerStr.includes('xxx');
// }

// alert(checkSpam('buy ViAgRA now')); // true
// alert(checkSpam('free xxxxx')); // true
// alert(checkSpam('innocent rabbit')); // false
