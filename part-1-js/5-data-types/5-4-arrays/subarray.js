// Подмассив наибольшей суммы
// На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
// Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
// Функция getMaxSubSum(arr) должна возвращать эту сумму.
// Например:
// getMaxSubSum([-1, 2, 3, -9]) == 5 (сумма выделенных элементов)
// getMaxSubSum([2, -1, 2, 3, -9]) == 6
// getMaxSubSum([-1, 2, 3, -9, 11]) == 11
// getMaxSubSum([-2, -1, 1, 2]) == 3
// getMaxSubSum([100, -9, 2, -3, 5]) == 100
// getMaxSubSum([1, 2, 3]) == 6 (берём все)

// Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:
// getMaxSubSum([-1, -2, -3]) = 0

function getMaxSubSum(arr) {
  console.log(arr); // (4) [-1, 2, 3, -9]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      console.log('Индекс: ' + i + ' меньше нуля!'); // индексы 0, 3
      arr[i] = 0; // преобразование отрицательных к 0
    }
  }
  console.log(arr); // в итоге (4) [0, 2, 3, 0]

  // подсчёт суммы
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return console.log(
    'Сумма положительных чисел в данном массиве, равна: ' + sum
  ); // Сумма положительных чисел в данном массиве, равна: 5
}

getMaxSubSum([-1, 2, 3, -9]); // 5
getMaxSubSum([2, -1, 2, 3, -9]); // 7
getMaxSubSum([-1, 2, 3, -9, 11]); // 16
getMaxSubSum([-2, -1, 1, 2]); // 3
getMaxSubSum([100, -9, 2, -3, 5]); // 107
getMaxSubSum([1, 2, 3]); // 6
getMaxSubSum([-1, -2, -3]); // 0

// решение JS info

// Это решение имеет оценку сложности O(n2).
// function getMaxSubSum(arr) {
//   let maxSum = 0; // если элементов не будет - возвращаем 0
//   for (let i = 0; i < arr.length; i++) {
//     let sumFixedStart = 0;
//     for (let j = i; j < arr.length; j++) {
//       sumFixedStart += arr[j];
//       maxSum = Math.max(maxSum, sumFixedStart);
//     }
//   }
//   return maxSum;
// }

// alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
// alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
// alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
// alert( getMaxSubSum([1, 2, 3]) ); // 6
// alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100

// Это решение имеет оценку сложности O(n).
// function getMaxSubSum(arr) {
//   let maxSum = 0;
//   let partialSum = 0;
//   for (let item of arr) {
//     // для каждого элемента массива
//     partialSum += item; // добавляем значение элемента к partialSum
//     maxSum = Math.max(maxSum, partialSum); // запоминаем максимум на данный момент
//     if (partialSum < 0) partialSum = 0; // ноль если отрицательное
//   }
//   return maxSum;
// }

// alert(getMaxSubSum([-1, 2, 3, -9])); // 5
// alert(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
// alert(getMaxSubSum([-2, -1, 1, 2])); // 3
// alert(getMaxSubSum([100, -9, 2, -3, 5])); // 100
// alert(getMaxSubSum([1, 2, 3])); // 6
// alert(getMaxSubSum([-1, -2, -3])); // 0
