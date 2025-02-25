// Скрыть элемент по нажатию кнопки
// Добавьте JavaScript к кнопке button, чтобы при нажатии элемент <div id="text"> исчезал.
{
  /* <input id="hider" value="Нажмите, чтобы спрятать текст" type="button" />
<div id="text">Текст</div> */
}

('use strict');

// !! моё решение
// ** реализация 1
// hider.addEventListener('click', () => (text.style.display = 'none'));

// ** реализация 2
const hiderInput = document.getElementById('hider');
const divText = document.getElementById('text');

hiderInput.addEventListener('click', () => (divText.style.display = 'none'));

// ?? решение JS Info
// здесь не важно, как мы скрываем текст.. можно использовать style.display
document.getElementById('hider').onclick = function () {
  document.getElementById('text').hidden = true;
};
