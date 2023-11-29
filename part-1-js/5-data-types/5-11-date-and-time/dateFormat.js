// Форматирование относительной даты
// Напишите функцию formatDate(date), форматирующую date по следующему принципу:
// - Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
// - В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
// - В противном случае, если меньше часа, вывести "m мин. назад".
// - В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.

// решение JS Info
function formatDate(date) {
  let diff = new Date() - date; // разница в миллисекундах

  if (diff < 1000) {
    return 'прямо сейчас'; // меньше 1 секунды
  }

  let sec = Math.floor(diff / 1000); // преобразовать разницу в секунды

  if (sec < 60) {
    return sec + ' сек. назад';
  }

  let min = Math.floor(diff / 60000); // преобразовать разницу в минуты
  if (min < 60) {
    return min + ' мин. назад';
  }

  // отформатировать дату
  // добавить ведущие нули к единственной цифре дню/месяцу/часам/минутам
  let d = date;
  d = [
    '0' + d.getDate(),
    '0' + (d.getMonth() + 1),
    '' + d.getFullYear(),
    '0' + d.getHours(),
    '0' + d.getMinutes(),
  ].map((component) => component.slice(-2)); // взять последние 2 цифры из каждой компоненты

  return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':'); // соединить компоненты в дату
}

console.log(formatDate(new Date(new Date() - 1))); // прямо сейчас
console.log(formatDate(new Date(new Date() - 30 * 1000))); // 30 сек. назад
console.log(formatDate(new Date(new Date() - 5 * 60 * 1000))); // 5 мин. назад
console.log(formatDate(new Date(new Date() - 86400 * 1000))); // вчерашняя дата: 28.11.23 16:32

// ? альтернативное решение
function formatDate2(date) {
  let dayOfMonth = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let diffMs = new Date() - date;
  let diffSec = Math.round(diffMs / 1000);
  let diffMin = diffSec / 60;
  let diffHour = diffMin / 60;

  // форматирование
  year = year.toString().slice(-2);
  month = month < 10 ? '0' + month : month;
  dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
  hour = hour < 10 ? '0' + hour : hour;
  minutes = minutes < 10 ? '0' + minutes : minutes;

  if (diffSec < 1) {
    return 'прямо сейчас';
  } else if (diffMin < 1) {
    return `${diffSec} сек. назад`;
  } else if (diffHour < 1) {
    return `${diffMin} мин. назад`;
  } else {
    return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`;
  }
}
