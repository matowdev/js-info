// Почему 6.35.toFixed(1) == 6.3?
console.log((1.35).toFixed(1)); // 1.4
console.log((6.35).toFixed(1)); // 6.3 - потеря точности
console.log((6.35).toFixed(20)); // 6.34999999999999964473
console.log((6.35 * 10).toFixed(20)); // 63.50000000000000000000
console.log(Math.round(6.35 * 10) / 10); // 6.35 -> 63.5 -> 64(rounded) -> 6.4
