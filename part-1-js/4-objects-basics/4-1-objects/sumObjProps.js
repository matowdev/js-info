// Сумма свойств объекта
// У нас есть объект, в котором хранятся зарплаты нашей команды:
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
// Если объект salaries пуст, то результат должен быть 0.

function getSalariesSum(salaries) {
  let sum = null;

  for (let employee in salaries) {
    sum += salaries[employee];
  }

  return sum;
}

let employeeSalary = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let totalSalarySum = getSalariesSum(employeeSalary);
console.log(`Total: ${totalSalarySum}$`); // Total: 390$

// решение JS Info
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let sum = 0;
// for (let key in salaries) {
//   sum += salaries[key];
// }

// alert(sum); // 390
