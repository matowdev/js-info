// Создать расширяемый калькулятор
// Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.
class Calculator {
  constructor() {
    this.methods = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
    };
  }

  calculate(str) {
    let split = str.split(' ');
    let a = +split[0];
    let op = split[1];
    let b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  }

  addMethod(name, func) {
    this.methods[name] = func;
  }
}

let calc = new Calculator();

alert(calc.calculate('3 + 7')); // 10

let powerCalc = new Calculator();

powerCalc.addMethod('*', (a, b) => a * b);
powerCalc.addMethod('/', (a, b) => a / b);
powerCalc.addMethod('**', (a, b) => a ** b);

let result = powerCalc.calculate('2 ** 3');
alert(result); // 8

// решение JS Info
function Calculator() {
  this.methods = {
    '-': (a, b) => a - b,
    '+': (a, b) => a + b,
  };

  this.calculate = function (str) {
    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  };

  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}
