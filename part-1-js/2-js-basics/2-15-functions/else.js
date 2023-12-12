// Обязателен ли "else"?
function checkAge(age) {
  if (age > 18) {
    console.log('Разрешение не нужно!');
    return true;
  } else {
    // ...
    // return confirm('Родители разрешили?');
    return console.log('Родители разрешили?');
  }
}

checkAge(17);

// Будет ли эта функция работать как-то иначе, если убрать else?
function checkAge2(age) {
  if (age > 18) {
    console.log('Разрешение не нужно!');
    return true;
  }
  // ...
  // return confirm('Родители разрешили?');
  return console.log('Родители разрешили?');
}

checkAge2(17);

// Оба варианта функций работают одинаково, отличий нет.
