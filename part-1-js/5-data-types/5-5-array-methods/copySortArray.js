// Скопировать и отсортировать массив
// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизмененным.
// Создайте функцию copySorted(arr), которая будет возвращать такую копию.
// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);
// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (без изменений)

let arrLang = ['HTML', 'JavaScript', 'CSS'];

// function copySorted(arr) {
//   let newArr = arr.slice();
//   return newArr.sort((a, b) => a.localeCompare(b));
// }

function copySorted(arr) {
  let newArr = arr.slice();
  return newArr.sort((a, b) => a.localeCompare(b));
}

let sorted = copySorted(arrLang);

console.log(sorted); // ['CSS', 'HTML', 'JavaScript']
console.log(arrLang); // ['HTML', 'JavaScript', 'CSS']

// решение JS Info
function copySorted2(arr) {
  return arr.slice().sort();
}

let arr = ['HTML', 'JavaScript', 'CSS'];
let sorted2 = copySorted2(arr);

console.log(sorted2); // ['CSS', 'HTML', 'JavaScript']
console.log(arr); // ['HTML', 'JavaScript', 'CSS']
