// Объекты-константы?
// Можно ли изменить объект, объявленный с помощью const? Как вы думаете?
// const newUser = {
//   name: 'John',
// };
// это будет работать?
// newUser.name = 'Pete';

const userObj = {
  name: 'John',
  surname: 'McGreedy',
};

userObj.name = 'Peter';
console.log(userObj); // {name: 'Peter', surname: 'McGreedy'}

// решение JS Info
// newUser хранит ссылку на объект. И это не может быть изменено. Но содержимое объекта менять можно.
// const newUser = {
//   name: 'John',
// };
// newUser.name = 'Pete'; // Работает!
// newUser = 123; // Ошибка
