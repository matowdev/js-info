// Анимация круга с помощью промиса
// Перепишите функцию showCircle, написанную в задании Анимация круга с помощью колбэка таким образом, чтобы она возвращала промис, вместо того чтобы принимать в аргументы функцию-callback.
// ? Возьмите решение из Анимация круга с помощью колбэка в качестве основы.

// showCircle(150, 150, 100).then((div) => {
//   div.classList.add('message-ball');
//   div.append('Hello, world!');
// });

// решение JS Info
function go() {
  showCircle(150, 150, 100).then((div) => {
    div.classList.add('message-ball');
    div.append('Hello, world!');
  });
}

function showCircle(cx, cy, radius) {
  let div = document.createElement('div');
  div.style.width = 0;
  div.style.height = 0;
  div.style.left = cx + 'px';
  div.style.top = cy + 'px';
  div.className = 'circle';
  document.body.append(div);

  return new Promise((resolve) => {
    setTimeout(() => {
      div.style.width = radius * 2 + 'px';
      div.style.height = radius * 2 + 'px';

      div.addEventListener('transitionend', function handler() {
        div.removeEventListener('transitionend', handler);
        resolve(div);
      });
    }, 0);
  });
}

// полный пример реализации по ссылке.. https://plnkr.co/edit/ORCVfFzWSpCUYYv1?p=preview&preview
