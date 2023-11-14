// Случайное число от min до max
// Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max)
function random(min, max) {
  let minMax = (Math.random() * (max - min) + min).toFixed(2);
  return console.log(minMax);
}

random(1, 5);
