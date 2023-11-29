// Сколько сегодня прошло секунд?
// Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.

// решение JS Info
function getSecondsToday() {
  let now = new Date();
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); // создаём объект с текущими днём/месяцем/годом
  let diff = now - today; // разница в миллисекундах

  return Math.round(diff / 1000); // получаем секунды
}

console.log(getSecondsToday()); // 58927

// ? альтернативное решение
function getSecondsToday2() {
  let d = new Date();
  return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
}
