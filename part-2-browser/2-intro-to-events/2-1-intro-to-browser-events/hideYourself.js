// Спрятать себя
// Создайте кнопку, которая будет скрывать себя по нажатию.
{
  /* <button id="self-hidden">Кнопка!</button> */
}

('use strict');

// !! моё решение
// ** реализация 1
// document.getElementById('self-hidden').onclick = function () {
//   this.hidden = true;
// };

// ** реализация 2
const selfHiddenBtn = document.getElementById('self-hidden');
selfHiddenBtn.addEventListener(
  'click',
  // () => (selfHiddenBtn.style.display = 'none')
  // или..
  () => (selfHiddenBtn.hidden = true)
);

// ?? решение JS Info
// можем использовать this в обработчике для доступа к самому элементу
{
  /* <input type="button" onclick="this.hidden=true" value="Нажми, чтобы спрятать"></input> */
}

// !! стоит обратить внимание, что у JS Info предлагается отработка через input.. а не через btn и не посредственно в Html, т.е. на элементе

// !! ПЛЮС.. как оказалось, если кнопка (или инпут) имеет стили display="block"; то hidden = true.. не будет отрабатывать
