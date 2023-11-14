// Усечение строки
// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength
function truncate(str, maxlength) {
  let strLength = str.length;
  if (strLength > maxlength) {
    return console.log(str.substr(0, maxlength - 1) + '…');
  } else {
    return console.log(str);
  }
}

truncate('Вот, что мне хотелось бы сказать на эту тему:', 20); // Вот, что мне хотело…
truncate('Всем привет!', 20); // Всем привет!

// решение JS Info
// function truncate(str, maxlength) {
//   return str.length > maxlength ? str.slice(0, maxlength - 1) + '…' : str;
// }

// Имейте в виду, что в качестве многоточия здесь используется … — ровно один специальный Юникодный символ. Это не то же самое, что ... — три точки!!
