// Сумма с помощью замыканий
// Напишите функцию sum, которая работает таким образом: sum(a)(b) = a + b.

function sum(a) {
  return function (b) {
    return a + b;
  };
}

console.log(sum(1)(2)); // в console будет.. 3
console.log(sum(5)(-1)); // в console будет.. 4

// ..или так, через более императивное замыкание

function sum2(a) {
  return function (b) {
    return a + b;
  };
}

let getSum = sum2(1);
console.log(getSum(2)); // 3

// ---
// первое решение, это из разряда "функций высшего порядка", каррирования??
