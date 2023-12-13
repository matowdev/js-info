// Создайте объект calculator (калькулятор) с тремя методами:
// read() (читать) запрашивает два значения и сохраняет их как свойства объекта с именами a и b.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.

// первый вариант
// let calculator = {
//   read() {
//     let arrNum = [];

//     while (true) {
//       let getNums = prompt('Введите "целое" число!', '');

//       if (getNums === null) {
//         alert('Ввод отменён(( до свидания..');
//         break;
//       } else if (getNums === '') {
//         alert('Пустая строка не подойдёт!');
//         break;
//       }

//       arrNum.push(+getNums);

//       if (arrNum.length > 1) break;
//     }

//     console.log(arrNum);

//     for (let i = 0; i < arrNum.length; i++) {
//       if (i === 0) {
//         calculator.a = arrNum[i];
//       } else {
//         calculator.b = arrNum[i];
//       }
//     }

//     console.log(calculator);
//   },

//   sum() {
//     return this.a + this.b;
//   },

//   mul() {
//     return this.a * this.b;
//   },
// };

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());

// *второй вариант
let calculator2 = {
  read() {
    let getNumA = prompt('Введите первое число!', '');

    if (getNumA === '' || isNaN(getNumA) === true) {
      getNumA = 0;
    } else if (getNumA === null) {
      alert('Ввод первого числа отменён((');
    }

    calculator2.a = +getNumA;

    let getNumB = prompt('Введите втрое число!', '');

    if (getNumB === '' || isNaN(getNumB) === true) {
      getNumB = 0;
    } else if (getNumB === null) {
      alert('Ввод второго числа отменён((');
    }

    calculator2.b = +getNumB;

    return console.log(`Были введены числа: ${getNumA} и ${getNumB}!`);
  },

  sum() {
    return console.log(`Результат их сложения, равен: ${this.a + this.b}`);
  },

  mul() {
    return console.log(`Результат их произведения, равен: ${this.a * this.b}`);
  },
};

calculator2.read(); // Были введены числа: 2 и 5!
calculator2.sum(); // Результат их сложения, равен: 7
calculator2.mul(); // Результат их произведения, равен: 10

// решение JS Info
// let calculator = {
//   sum() {
//     return this.a + this.b;
//   },

//   mul() {
//     return this.a * this.b;
//   },

//   read() {
//     this.a = +prompt('a?', 0);
//     this.b = +prompt('b?', 0);
//   },
// };

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());
