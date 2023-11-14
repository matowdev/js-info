// Трансформировать в объекты
// У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
// Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.
// let vasya = { name: 'Вася', surname: 'Пупкин', id: 1 };
// let petya = { name: 'Петя', surname: 'Иванов', id: 2 };
// let masha = { name: 'Маша', surname: 'Петрова', id: 3 };

// let users = [vasya, petya, masha];

// let usersMapped =
//   /* ... ваш код ... */

// usersMapped = [
//   { fullName: "Вася Пупкин", id: 1 },
//   { fullName: "Петя Иванов", id: 2 },
//   { fullName: "Маша Петрова", id: 3 }
// ]

// alert(usersMapped[0].id); // 1
// alert(usersMapped[0].fullName); // Вася Пупкин

let userVasya = { name: 'Вася', surname: 'Пупкин', id: 1 };
let userPetya = { name: 'Петя', surname: 'Иванов', id: 2 };
let userMasha = { name: 'Маша', surname: 'Петрова', id: 3 };

let arrUsers = [userVasya, userPetya, userMasha];

function getNewArr(arrUsers) {
  let newArrUsers = JSON.parse(JSON.stringify(arrUsers));

  newArrUsers.forEach((para) => {
    para.fullName = `${para.name} ${para.surname}`;
    let temp = `${para.id}`;

    delete para.name;
    delete para.surname;
    delete para.id;

    para.id = temp;
  });

  return newArrUsers;
}

let usersMapped = getNewArr(arrUsers);

console.log(arrUsers);
console.log(usersMapped);
console.log(usersMapped[0].id); // 1
console.log(usersMapped[0].fullName); // Вася Пупкин

// решение JS Info
let vasya = { name: 'Вася', surname: 'Пупкин', id: 1 };
let petya = { name: 'Петя', surname: 'Иванов', id: 2 };
let masha = { name: 'Маша', surname: 'Петрова', id: 3 };

let users = [vasya, petya, masha];

let usersMapped2 = users.map((user) => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id,
}));

/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

console.log(usersMapped2[0].id); // 1
console.log(usersMapped2[0].fullName); // Вася Пупкин
