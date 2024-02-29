// Сортировать по полю
// У нас есть массив объектов, который нужно отсортировать:

// let users = [
//   { name: 'John', age: 20, surname: 'Johnson' },
//   { name: 'Pete', age: 18, surname: 'Peterson' },
//   { name: 'Ann', age: 19, surname: 'Hathaway' },
// ];

// Можем ли мы сделать его короче, например вот таким?

// users.sort(byField('name'));
// users.sort(byField('age'));

let users = [
  { name: 'John', age: 20, surname: 'Johnson' },
  { name: 'Pete', age: 18, surname: 'Peterson' },
  { name: 'Ann', age: 19, surname: 'Hathaway' },
];

function byField(field) {
  return function (a, b) {
    if (a[field] > b[field]) return 1;
    if (a[field] < b[field]) return -1;
    return 0;
  };
}

let sortByName = structuredClone(users.sort(byField('name')));
console.log(sortByName); // Ann, John, Pete

let sortByAge = structuredClone(users.sort(byField('age')));
console.log(sortByAge); // 18, 19, 20

// ---
// решение JS Info

// function byField(fieldName){
//   return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
// }
