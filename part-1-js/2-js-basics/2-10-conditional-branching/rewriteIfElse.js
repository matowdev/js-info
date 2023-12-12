// Перепишите 'if..else' в '?'
// Перепишите if..else с использованием нескольких операторов '?'
// let message;
// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }

function getPosition() {
  let entry = prompt('Кто Вы?', '');
  entry === 'Сотрудник' || entry === 'сотрудник'
    ? alert('Привет!')
    : entry === 'Директор' || entry === 'директор'
    ? alert('Здравствуйте!')
    : entry === ''
    ? alert('Вы нечего не ввели..')
    : alert('До свидания.');
}

getPosition();

// решение JS Info
// let message =
//   login == 'Сотрудник'
//     ? 'Привет'
//     : login == 'Директор'
//     ? 'Здравствуйте'
//     : login == ''
//     ? 'Нет логина'
//     : '';
