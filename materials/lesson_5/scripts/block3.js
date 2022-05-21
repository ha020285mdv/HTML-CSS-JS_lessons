// Планирование: setTimeout и setInterval
// setTimeout(
//   (...args) => {
//     // func
//     console.log(args);
//   },
//   2000, // timeout
//   1, // ...otherArgs
//   2,
//   3,
//   4,
//   5
// );

// setInterval(
//   (...args) => {
//     // func
//     console.log(args);
//   },
//   500, // timeout
//   1, // ...otherArgs
//   2,
//   3,
//   4,
//   5
// );

// let timer;

// timer_button.addEventListener("click", () => {
//   timer = setTimeout(
//     (...args) => {
//       // func
//       console.log(args);
//     },
//     2000, // timeout
//     1, // ...otherArgs
//     2,
//     3,
//     4,
//     5
//   );
// });

// stop_button.addEventListener("click", () => {
//   if (timer) {
//     console.log("Stopped");
//     clearTimeout(timer);
//   }
// });

// Рекурсивный setTimeout

/** вместо:
let timerId = setInterval(() => alert('tick'), 2000);
*/
// let timerId = setTimeout(function tick() {
//   alert('tick');
//   timerId = setTimeout(tick, 2000); // (*)
// }, 2000);

// Замыкание

// let a = "global";
// function outer() {
//   let b = "outer";
//   function inner() {
//     let c = "inner";
//     console.log(c);
//     console.log(b);
//     console.log(a);
//   }
//   console.log(a);
//   console.log(b);
//   inner();
// }
// outer();
// console.log(a);

// Практические примеры замыкания
// function getCounterValue() {
//   let counter = 0;
//   return function () {
//     return counter++;
//   };
// }
// const count = getCounterValue();
// console.log(count());
// console.log(count());
// console.log(count());
// console.log(count());
// console.log(count());

// One more

// {
//   let counter = 32;
//   function blob() {
//     return counter;
//   }
// }
// console.log(counter);
// console.log(blob());

// recursion

// function factorial(n) {
//   if (n === 1) return 1;
//   return n * factorial(n - 1);
// }
// alert(factorial(4));

// performance.now()
// console.log(performance.now());
// console.time("test");
// for (let index = 0; index < 1000000; index++) {}
// console.log(performance.now());
// console.timeEnd("test");

// JSON obj

// const obj = {
//   a: 3,
//   name: "Test",
//   isDev: true,
//   go: function () {
//     console.log("asd");
//   },
// };

// console.log(JSON.stringify(obj));

// replcer
// console.log(JSON.stringify(obj, ["name", "isDev"]));
// console.log(
//   JSON.stringify(obj, (key, value) => {
//     if (typeof value === "string") {
//       return undefined; // удаляем все строковые свойства
//     }
//     return value;
//   })
// );

// space
// console.log(JSON.stringify(obj, null, "\t"));
