// Армия функций
// Следующий код создаёт массив из стрелков (shooters).
// Каждая функция предназначена выводить их порядковые номера. Но что-то пошло не так… Почините код, чтобы он работал как задумано.

// function makeArmy() {
//   let shooters = [];

//   let i = 0;
//   while (i < 10) {
//     let shooter = function() { // функция shooter
//       alert( i ); // должна выводить порядковый номер
//     };
//     shooters.push(shooter); // и добавлять стрелка в массив
//     i++;
//   }

//   // ...а в конце вернуть массив из всех стрелков
//   return shooters;
// }

// let army = makeArmy();

// // все стрелки выводят 10 вместо их порядковых номеров (0, 1, 2, 3...)
// army[0](); // 10 от стрелка с порядковым номером 0
// army[1](); // 10 от стрелка с порядковым номером 1
// army[2](); // 10 ...и т.д.

// ---

function makeArmy() {
  let shooters = [];

  for (let i = 0; i < 10; i++) {
    let shooter = function () {
      console.log(i);
    };

    shooters.push(shooter);
  }

  return shooters;
}

let army = makeArmy();

army[0](); // 0
army[1](); // 1
army[2](); // 2

// ---
// решение JS Info

function makeArmy2() {
  let shooters = [];
  let i = 0;

  while (i < 10) {
    let j = i;
    let shooter = function () {
      console.log(j);
    };

    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army2 = makeArmy2();

army2[0](); // 0
army2[5](); // 5
