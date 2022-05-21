// reduce/reduceRight

// previousValue, item, index, array

// let arr = [1, 2, 3, 4, 5];
// let result = arr.reduce((sum, current) => sum + current, 0);
// alert(result); // 15

// setAttribute

// x.setAttribute("class", "test");

// x.onclick = () => {
//   console.log("Event dropped onclick");
// };

// x.oncontextmenu = () => {
//   console.log("Event dropped oncontextmenu");
// };

// x.onmouseover = () => {
//   console.log("Event dropped onmouseover");
// };

// x.onmousedown = () => {
//   console.log("Event dropped onmousedown");
// };

// x.onmousemove = () => {
//   console.log("Event dropped onmousemove");
// };

// document.onkeyup = (e) => {
//   console.log("onkeyup is called with button", e);
// };

// document.onkeydown = (e) => {
//   console.log("onkeydown is called with button", e);
// };

// addEventListener

// x.addEventListener("click", (event) => {}, {
//   capture: true,
//   once: true,
// });

// event

// Обработчики некоторых событий можно назначать только через addEventListener

// document.addEventListener("DOMContentLoaded", () => {
//   alert("Blob");
// });
// for (var i = 0; i < 1000000000; i++) {}
// alert("Click");

// removeEventListener

// element.removeEventListener(event, handler[, options]);

// Объект события

// elem.onclick = function(event) {
//   // вывести тип события, элемент и координаты клика
//   alert(event.type + " на " + event.target);
//   alert("Координаты: " + event.clientX + ":" + event.clientY);
// };

// this и event.target

// const redDiv = document.querySelector(".tomato_div");
// redDiv.addEventListener("click", function (e) {
//   console.log(this, e.target);
// });

// text.addEventListener("change", (e) => {
//   console.log("Event change", e.target.value);
// });
// text.addEventListener("input", (e) => {
//   console.log("Event input", e.target.value);
// });
// text.addEventListener("cut", (e) => {
//   console.log("Event cut", e.target.value);
// });
// text.addEventListener("copy", (e) => {
//   console.log("Event copy", e.target.value);
// });
// text.addEventListener("paste", (e) => {
//   console.log("Event paste", e.target.value);
// });

// Отправка формы: событие и метод submit

// form.onsubmit = (e) => {
//   console.log(e);
//   return false;
// };

// Event.preventDefault()

// form.onsubmit = (e) => {
//   console.log('Prevented');
//   e.preventDefault();
// };

// Всплытие и погружение, event.stopImmediatePropagation

// const blueViolet = document.querySelector(".blueviolet_div");
// const redDiv = document.querySelector(".tomato_div");
// const greenDiv = document.querySelector(".green_div");

// greenDiv.addEventListener(
//   "click",
//   function (e) {
//     console.log("Event on capture", this);
//   },
//   { capture: true }
// );

// redDiv.addEventListener(
//   "click",
//   function (e) {
//     console.log("Event on capture", this);
//   },
//   { capture: true }
// );

// redDiv.addEventListener(
//   "click",
//   function (e) {
//     console.log("Event on capture 2", this);
//   },
//   { capture: true }
// );

// blueViolet.addEventListener(
//   "click",
//   function (e) {
//     console.log("BlueViolet Block", this);
//   },
//   { capture: false }
// );

// blueViolet.addEventListener(
//   "click",
//   function (e) {
//     console.log("BlueViolet Block", this);
//   },
//   { capture: true }
// );

// greenDiv.addEventListener(
//   "click",
//   function (e) {
//     console.log("Event on bubbling", this);
//   },
//   { capture: false }
// );
// redDiv.addEventListener(
//   "click",
//   function (e) {
//     console.log("Event on bubbling", this);
//   },
//   {
//     capture: false,
//   }
// );
