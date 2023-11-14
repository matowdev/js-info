// Скопирован ли массив?
// Что выведет следующий код?

let fruits = ['Яблоки', 'Груша', 'Апельсин'];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push('Банан');

// что в fruits?
// console.log([] == []); // false
// console.log(fruits == shoppingCart); // true
console.log(fruits.length); // 4
console.log(fruits); // (4) ['Яблоки', 'Груша', 'Апельсин', 'Банан']
