// Дети: childNodes, firstChild, lastChild
// console.log(document.body.childNodes);
// console.log(list.childNodes);

// console.log(list.firstChild);
// console.log(list.lastChild);

console.log(document.body.childNodes);
console.log(document.head.nextSibling);
console.log(document.body.previousSibling);

console.log(list.children);
console.log(list.firstElementChild);
console.log(list.lastElementChild);
console.log(list.previousElementSibling);
console.log(list.parentElement);

// Promise

// let promise = new Promise(function (resolve, reject) {
//   // функция-исполнитель (executor)
//   // "певец"
//   console.log("Test");
// });

// let promise = new Promise(function(resolve, reject) {
//   // эта функция выполнится автоматически, при вызове new Promise
//   // через 1 секунду сигнализировать, что задача выполнена с результатом "done"
//   setTimeout(() => resolve("Я всё"), 1000);
// });

// let promise = new Promise(function(resolve, reject) {
//   // спустя одну секунду будет сообщено, что задача выполнена с ошибкой
//   setTimeout(() => reject(new Error("Чёт не пошло")), 1000);
// });

// let promise = new Promise(function(resolve, reject) {
//   resolve("done");
//   reject(new Error("…")); // игнорируется
//   setTimeout(() => resolve("…")); // игнорируется
// });

// Потребители: then, catch, finally

// promise.then(
//   function(result) { /* обработает успешное выполнение */ },
//   function(error) { /* обработает ошибку */ }
// );

// correct

// let promise = new Promise(function(resolve, reject) {
//   setTimeout(() => resolve("done!"), 1000);
// });
// // resolve запустит первую функцию, переданную в .then
// promise.then(
//   result => alert(result), // выведет "done!" через одну секунду
//   error => alert(error) // не будет запущена
// );

//with error

// let promise = new Promise(function(resolve, reject) {
//   setTimeout(() => reject(new Error("Whoops!")), 1000);
// });
// // reject запустит вторую функцию, переданную в .then
// promise.then(
//   result => alert(result), // не будет запущена
//   error => alert(error) // выведет "Error: Whoops!" спустя одну секунду
// );

// Catch
// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => reject(new Error("Ошибка!")), 1000);
// });
// // .catch(f) это тоже самое, что promise.then(null, f)
// promise.catch(alert); // выведет "Error: Ошибка!" спустя одну секунду

// new Promise((resolve, reject) => {
//   /* сделать что-то, что займёт время, и после вызвать resolve/reject */
// })
//   // выполнится, когда промис завершится, независимо от того, успешно или нет
//   // .finally(() => остановить индикатор загрузки)
//   // .then(result => показать результат, err => показать ошибку)

// new Promise((resolve, reject) => {
//   setTimeout(() => resolve("result"), 2000)
// })
//   .finally(() => alert("Промис завершён"))
//   .then(result => alert(result)); // <-- .then обработает результат

// new Promise((resolve, reject) => {
//   throw new Error("error");
// })
//   .finally(() => alert("Промис завершён"))
//   .catch(err => alert(err));  // <-- .catch обработает объект ошибки

const btn = document.getElementById("btn");
const server = [
  {
    name: "Vlad",
    surName: "Rusanov",
    eyeColour: "eyeColour",
  },
  {
    name: "Vova",
    surName: "Test",
    eyeColour: "eyeColour",
  },
];
const getDataFromServer = () => {
  return new Promise((resolve, reject) => {
    // (0)
    setTimeout(() => {
      resolve(server); // успех
      // reject(new Error('500 ServerError')); // не успех
    }, 2000);
  });
};
function asyncAction() {
  const responce = getDataFromServer();
  responce
    .then((data) => {
      // (1)
      console.log("data: ", data); // [{ name: 'Vlad', ... }, { name: 'Vova', ... }]
    })
    .catch((err) => {
      // (2)
      console.log("err: ", err);
    });
}
btn.addEventListener("click", asyncAction);
