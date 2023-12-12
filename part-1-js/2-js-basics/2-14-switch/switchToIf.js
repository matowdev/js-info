// Напишите "if", аналогичный "switch"
// Напишите if..else, соответствующий следующему switch:
// switch (browser) {
//   case 'Edge':
//     alert("You've got the Edge!");
//     break;
//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert('Okay we support these browsers too');
//     break;
//   default:
//     alert('We hope that this page looks ok!');
// }

function getBrowserName() {
  let browserName = prompt('Введите имя вашего браузера!?', '');
  if (browserName === null) {
    return alert('Вы отменили ввод..');
  } else if (browserName === '') {
    alert('Вы ничего не ввели??');
    return getBrowserName();
  } else if (browserName === 'Edge' || browserName === 'edge') {
    return alert('У вас есть, Edge - преимущество!');
  } else if (
    browserName === 'Chrome' ||
    browserName === 'Firefox' ||
    browserName === 'Safari' ||
    browserName === 'Opera'
  ) {
    return alert('Отличный выбор!');
  } else {
    return alert('Главное что-бы работал корректно..');
  }
}

getBrowserName();

// решение JS Info
// if (browser == 'Edge') {
//   alert("You've got the Edge!");
// } else if (
//   browser == 'Chrome' ||
//   browser == 'Firefox' ||
//   browser == 'Safari' ||
//   browser == 'Opera'
// ) {
//   alert('Okay we support these browsers too');
// } else {
//   alert('We hope that this page looks ok!');
// }
