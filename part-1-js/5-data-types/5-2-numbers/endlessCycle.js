// Бесконечный цикл по ошибке
function endlessCycle() {
  // let i = 0;
  // while (i != 10) {
  //   i += 0.2;
  // }
  console.log('Hello!');
}

endlessCycle();

function endlessCycle2() {
  let i = 0;
  while (i < 11) {
    i += 0.2;
    if (i > 9.8 && i < 10.2) alert(i);
    console.log(i);
  }
}

endlessCycle2();
