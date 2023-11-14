// Создайте объект с ключами из массива
// Допустим, мы получили массив пользователей в виде {id:..., name:..., age:... }.
// Создайте функцию groupById(arr), которая создаст из него объект с id в качестве ключа и элементами массива в качестве значений.
// Например:
// let users = [
//   { id: 'john', name: 'John Smith', age: 20 },
//   { id: 'ann', name: 'Ann Smith', age: 24 },
//   { id: 'pete', name: 'Pete Peterson', age: 31 },
// ];

// let usersById = groupById(users);

// после вызова у нас должно получиться:
// usersById = {
//   john: { id: 'john', name: 'John Smith', age: 20 },
//   ann: { id: 'ann', name: 'Ann Smith', age: 24 },
//   pete: { id: 'pete', name: 'Pete Peterson', age: 31 },
// };

let arrUsers = [
  { id: 'john', name: 'John Smith', age: 20 },
  { id: 'ann', name: 'Ann Smith', age: 24 },
  { id: 'pete', name: 'Pete Peterson', age: 31 },
];

function groupById(arrUsers) {
  const usernamesById = arrUsers.reduce(function (obj, user) {
    return {
      ...obj,
      [user.id]: { user },
    };
  }, {});
  return usernamesById;
}

let usersById = groupById(arrUsers);

console.log(usersById); // {john: {…}, ann: {…}, pete: {…}} => ann: {user: {…}}

// решение JS Info
function groupById2(arrUsers) {
  return arrUsers.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {});
}

let usersById2 = groupById2(arrUsers);

console.log(usersById2); // {john: {…}, ann: {…}, pete: {…}} => ann: {id: 'ann', name: 'Ann Smith', age: 24}
