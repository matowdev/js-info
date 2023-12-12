// Переписать условия "if" на "switch"
// Перепишите код с использованием одной конструкции switch:
// const number = +prompt('Введите число между 0 и 3', '');
// if (number === 0) {
//   alert('Вы ввели число 0');
// }
// if (number === 1) {
//   alert('Вы ввели число 1');
// }
// if (number === 2 || number === 3) {
//   alert('Вы ввели число 2, а может и 3');
// }

function getNumber() {
  const number = prompt('Введите число между 0 и 3..', '');
  switch (number) {
    case null:
      alert('До свидания!');
      break;
    case '':
      alert('Пустая строка не проходит, до свидания..');
      break;
    case '0':
      alert('Вы ввели число "0", отличный выбор!');
      break;
    case '1':
      alert('Вы ввели число "1", здорово!');
      break;
    case '2':
    case '3':
      alert('Вы ввели число 2, или может 3.. признавайтесь?');
      break;
    default:
      alert('Что-то, Вы не то навводили!?');
      break; // как правило "хорошего тона"
  }
}

getNumber();

// решение JS Info
// const number = +prompt('Введите число между 0 и 3', '');
// switch (number) {
//   case 0:
//     alert('Вы ввели число 0');
//     break;
//   case 1:
//     alert('Вы ввели число 1');
//     break;
//   case 2:
//   case 3:
//     alert('Вы ввели число 2, а может и 3');
//     break;
// }
