// Перепишите функцию, используя оператор '?' или '||'
function checkAge(age) {
  return age > 18 ? true : console.log('Родители точно разрешили?');
}

// checkAge(21);

function checkTrue() {
  if (checkAge(21) === true) {
    console.log('Разрешение не нужно!');
  }
}

checkTrue();

// второй вариант
function checkAge2(age) {
  return age > 18 || console.log('Родители точно разрешили?');
}

checkAge2(17);
