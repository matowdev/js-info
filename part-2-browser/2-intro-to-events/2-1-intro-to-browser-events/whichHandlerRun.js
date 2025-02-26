// Какой обработчик запустится?
// В переменной button находится кнопка. Изначально на ней нет обработчиков.
// Который из обработчиков запустится? Что будет выведено при клике после выполнения кода?

// button.addEventListener("click", () => console.log("1"));
// button.removeEventListener("click", () => console.log("1"));
// button.onclick = () => console.log(2);

// !! моё решение
const button = document.getElementById('btn-handlers');

button.addEventListener('click', () => console.log('1')); // отобразиться в console
button.removeEventListener('click', () => console.log('1')); // это ничего не сбросит/не отменит
button.onclick = () => console.log(2); // то же отобразиться в console

// т.е. при клике на button в console, отобразиться/одновременно.. 1, 2..

// ?? решение JS Info
// Ответ: 1 и 2.
// Первый обработчик сработает, потому что он не был удалён методом removeEventListener. Чтобы удалить обработчик, необходимо передать именно ту функцию, которая была назначена в качестве обработчика. Несмотря на то, что код идентичен, в removeEventListener передаётся новая, другая функция.

// Для того чтобы удалить функцию-обработчик, нужно где-то сохранить ссылку на неё, например:
// function handler() {
//   console.log(1);
// }
//
// button.addEventListener('click', handler);
// button.removeEventListener('click', handler);

// Обработчик button.onclick сработает независимо от addEventListener.
