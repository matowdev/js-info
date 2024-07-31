// Что код выведет в консоли?

console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3));

Promise.resolve().then(() => setTimeout(() => console.log(4)));

Promise.resolve().then(() => console.log(5));

setTimeout(() => console.log(6));

console.log(7);

// ? [НЕПРАВИЛЬНО] В console увидим: 1 -> 7 -> 3 -> 5 -> 2 -> 4 -> 6

// ! Решение JS Info
// Вывод в консоли: 1 7 3 5 2 6 4.

// Задача довольно простая, нужно лишь понимать, как работают очереди микрозадач и макрозадач.
// Давайте разберем, что здесь происходит, по шагам.

console.log(1);
// Первая строка выполняется сразу и выводит `1`.
// Очереди микрозадач и макрозадач на данный момент пусты.

setTimeout(() => console.log(2));
// `setTimeout` ставит переданный колбэк в очередь макрозадач
// - содержимое очереди макрозадач:
//   `console.log(2)`

Promise.resolve().then(() => console.log(3));
// В очередь микрозадач ставится колбэк, выводящий `3`
// - содержимое очереди микрозадач:
//   `console.log(3)`

Promise.resolve().then(() => setTimeout(() => console.log(4)));
// В очередь микрозадач ставится колбэк с `setTimeout`
// - содержимое очереди микрозадач:
//   `console.log(3); setTimeout(...4)`

Promise.resolve().then(() => console.log(5));
// В очередь микрозадач ставится колбэк, выводящий `5`
// - содержимое очереди микрозадач:
//   `console.log(3); setTimeout(...4); console.log(5)`

setTimeout(() => console.log(6));
// `setTimeout` ставит переданный колбэк в очередь макрозадач
// - содержимое очереди макрозадач:
//   `console.log(2); console.log(6)`

console.log(7);
// Тут же выводит `7`.

/* Итак, получается, что:
1. Числа 1 и 7 выводятся сразу же, так как они не используют очереди задач вообще.
2. Далее после окончания основного потока кода срабатывает очередь микрозадач.
  - Её содержимое: console.log(3); setTimeout(...4); console.log(5).
  - Выведется 3 и 5, а setTimeout(() => console.log(4)) поставит в конец очереди макрозадач вывод 4.
  - В очереди макрозадач получается теперь: console.log(2); console.log(6); console.log(4).
3. Очередь микрозадач полностью выполнена, срабатывает очередь макрозадач. Она выведет 2, 6, 4.
Получается вывод 1 7 3 5 2 6 4. */
