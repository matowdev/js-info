// Покажите знак числа
// Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert
function showSign() {
  let str = prompt('Введите число: ', '');
  let num = +str;
  if (str === null) {
    return alert('До свидания!');
  } else if (str === '') {
    alert('Вы не чего не ввели!?');
    return showSign();
  }
  if (isNaN(num) === true) {
    alert('Не корректный ввод!');
    return showSign();
  } else if (num > 0) {
    return alert('Вы ввели число больше "0".. т.е. ' + num);
  } else if (num === 0 && str !== '') {
    return alert('Бинго! Абсолютная величина - ноль!');
  } else if (num < 0) {
    return alert('Вы ввели число меньше "0".. т.е. ' + num);
  }
}

showSign();

// решение JS Info
let value = prompt('Введите число', 0);

if (value > 0) {
  alert(1);
} else if (value < 0) {
  alert(-1);
} else {
  alert(0);
}
