// if (строка с нулём)
// Выведется ли console.log?
function getHello() {
  if ('0') {
    console.log('Привет!');
  } else {
    console.log('Пока..');
  }
}

getHello(); // Привет!

// console.log(Boolean('')); // false
