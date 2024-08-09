// Вызовите async–функцию из "обычной"
// Есть «обычная» функция. Как можно внутри неё получить результат выполнения async–функции?

async function wait() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return 10;
}

function f() {
  // ...что здесь написать?
  // чтобы вызвать wait() и дождаться результата "10" от async–функции
  // не забывайте, здесь нельзя использовать "await"
}

// ! моё решение
async function wait() {
  // return await new Promise((resolve) => setTimeout(resolve(10), 1000));

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return 10;
}

function f() {
  wait().then((result) => {
    // console.log(`Ответ будет: ${result}`); // "Ответ будет: 10"
    console.log(result); // 10
  });
}

f();

// Решение JS Info
// Это тот случай, когда понимание внутреннего устройства работы async/await очень кстати.
// Здесь нужно думать о вызове функции async, как о промисе. И просто воспользоваться .then:
// async function wait() {
//   await new Promise((resolve) => setTimeout(resolve, 1000));

//   return 10;
// }

// function f() {
//   wait().then((result) => alert(result)); // 10
// }

// f();
