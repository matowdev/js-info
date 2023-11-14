// Что выведет console.log (ИЛИ)?
console.log(null || 2 || undefined); // 2, это первое значение, которое в логическом контексте даст true

// Что выведет console.log (ИЛИ)?
console.log(console.log(1) || 5 || console.log(3)); // 1 и 5

// Что выведет console.log (И)?
console.log(1 && null && 2); // null, потому что это первое «ложное» значение из списка

// Что выведет console.log (И)?
console.log(console.log(1) && console.log(2)); // 1, а затем undefined

// Что выведет этот код?
console.log(null || (2 && 3) || 4); // 3

// Что выведет этот код (||=, &&=)?
let value = NaN;
console.log((value &&= 10)); // NaN
console.log(value || (value = 20)); // 20
console.log((value &&= 30)); // 30
console.log((value ||= 40)); // 30

// Проверка значения из диапазона
let age;
if ((age) => 14 && age <= 90);

// Проверка значения вне диапазона
if (!(age >= 14 && age <= 90));
// или
if (age < 14 || age > 90);

// Вопрос об "if"
if (-1 || 0) console.log('first'); // выполнится
if (-1 && 0) console.log('second'); // не выполнится, т.к.  if(need -> true)
if (null || (-1 && 1)) console.log('third'); // выполнится

// Проверка логина
function login() {
  let enterName = prompt('Кто там? ', '');
  let enterPassword;

  if (enterName === null) {
    return alert('Отмена!?');
  }
  if (enterName !== '' && enterName !== 'Админ') {
    return alert(enterName + ', я вас не знаю, до свидания!');
  } else if (enterName === '') {
    alert('Представитесь!? ', '');
    return login();
  }
  if (enterName === 'Админ') {
    enterPassword = prompt('Введите пароль: ', '');
  }
  if (enterPassword === null) {
    return alert('Отмена!?');
  } else if (enterPassword !== 'Я главный') {
    alert('Неверный пароль!');
    return login();
  } else if (enterPassword === 'Я главный') {
    return alert('Здравствуйте!');
  }
}

login();

// решение JS info
// let userName = prompt('Кто там?', '');

// if (userName === 'Админ') {
//   let pass = prompt('Пароль?', '');

//   if (pass === 'Я главный') {
//     alert('Здравствуйте!');
//   } else if (pass === '' || pass === null) {
//     alert('Отменено');
//   } else {
//     alert('Неверный пароль');
//   }
// } else if (userName === '' || userName === null) {
//   alert('Отменено');
// } else {
//   alert('Я вас не знаю');
// }
