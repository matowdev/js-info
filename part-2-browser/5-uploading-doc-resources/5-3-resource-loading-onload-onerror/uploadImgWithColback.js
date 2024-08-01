// Загрузите изображения с колбэком
// Создайте функцию preloadImages(sources, callback), которая загружает все изображения из массива sources и, когда все они будут загружены, вызывает callback.

function preloadImages(sources, callback) {
  let loadedImages = 0;
  let numImages = sources.length;

  function imageLoaded() {
    loadedImages++;
    if (loadedImages === numImages) {
      callback(); // вызов callback, когда все изображения загружены
    }
  }

  sources.forEach(function (src) {
    let img = new Image();
    img.onload = imageLoaded;
    img.src = src;

    document.body.append(img);
  });
}

let sources = [
  'https://en.js.cx/images-load/1.jpg',
  'https://en.js.cx/images-load/2.jpg',
  'https://en.js.cx/images-load/3.jpg',
];

// добавление случайных символов к ссылкам, чтобы избежать кеширования
for (let i = 0; i < sources.length; i++) {
  sources[i] += '?' + Math.random();
}

// для каждого изображения
// создание другого изображения с аналогичным src (для понимания, общей ширины изображений)
function testLoaded() {
  let widthSum = 0;
  for (let i = 0; i < sources.length; i++) {
    let img = document.createElement('img');
    img.src = sources[i];
    widthSum += img.width;
  }
  console.log(`Ширина изображений = ${widthSum}px.. Ого!`); // [ТРИ ИЗОБРАЖЕНИЯ] + в console "Ширина изображений = 300px.. Ого!"
}

preloadImages(sources, testLoaded);

// Решение JS Info
// function preloadImages(sources, callback) {
//   let counter = 0;

//   function onLoad() {
//     counter++;
//     if (counter == sources.length) callback();
//   }

//   for (let source of sources) {
//     let img = document.createElement('img');
//     img.onload = img.onerror = onLoad;
//     img.src = source;
//   }
// }

// let sources = [
//   'https://en.js.cx/images-load/1.jpg',
//   'https://en.js.cx/images-load/2.jpg',
//   'https://en.js.cx/images-load/3.jpg',
// ];

// // добавляем случайные символы к ссылкам, чтобы избежать кеширования
// for (let i = 0; i < sources.length; i++) {
//   sources[i] += '?' + Math.random();
// }

// // для каждого изображения
// // создадим другое изображение с аналогичным src и проверим, есть ли у нас его ширина
// function testLoaded() {
//   let widthSum = 0;
//   for (let i = 0; i < sources.length; i++) {
//     let img = document.createElement('img');
//     img.src = sources[i];
//     widthSum += img.width;
//   }
//   alert(widthSum);
// }

// // должно выводиться 300
// preloadImages(sources, testLoaded);
