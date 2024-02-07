let area = document.getElementById('area');

area.value = localStorage.getItem('area');
area.oninput = () => {
  localStorage.setItem('area', area.value);
};

// * альтернативные решение, вместо стрелочной функции

// ? использовать анонимную
// area.oninput = function() {
//   localStorage.setItem('area', area.value);
// };

// ? использовать именованную функцию, с последующим присвоением (в качестве обработчика события)
// function saveText() {
//   localStorage.setItem('area', area.value);
// }

// area.oninput = saveText;
