// Можно ли "перевыполнить" промис?
// Что выведет код ниже?

let promise = new Promise(function (resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(alert);

// ! отработает только resolve(1) т.к. логика Promise принимает во внимание только первый вызов того/иного callback(a)

// решение JS Info
// вывод будет: 1. Второй вызов resolve будет проигнорирован, поскольку учитывается только первый вызов reject/resolve. Все последующие вызовы – игнорируются.
