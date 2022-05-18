// Вычисляемое свойство js

// const person_one = {
//   name: "Peter",
//   job: "Developer",
//   sex: "Male",
//   age: 22,
// };

// console.log(person_one.age);
// console.log(person_one["jo" + "b"]);

// const nameOfProperty = "job";

// console.log(person_one[nameOfProperty]);

// const partOfProperty = "a";

// console.log(person_one[partOfProperty + "ge"]);

// for...in

const person_two = {
  name: "Peter",
  job: "Developer",
  sex: "Male",
  age: 22,
};

// for (const property in person_two) {
//   console.log("Property name:", property);
//   console.log("Property value:", person_two[property]);
// }

const arr_two = ["Hello", "world", "!"];

// for (const key in arr_two) {
//   console.log("key name:", key);
//   console.log("key value:", arr_two[key]);
// }

// for of

// const arr_three = ["Hello", "world", "!"];

// for (const item of arr_three) {
//   console.log("Item is: ", item);
// }

// Перебор массива через for

// const arr_four = [1, 2, 3, 4, 5];

// for (let index = 0; index < arr_four.length; index++) {
//   const element = arr_four[index];
//   console.log(element);
// }
// console.log("\n Using for of");
// for (const element of arr_four) {
//   console.log(element);
// }

// Использование continue и break

// const arr_five = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let index = 0; index < arr_five.length; index++) {
//   // Начало тела цикла
//   const element = arr_five[index];
//   if (element % 2 === 0) {
//     continue;
//     // Досрочный конец тела цикла
//   }
//   if (element === 8) {
//     // Досрочный конец цикла
//     break;
//   }
//   console.log("Element", element);
//   // конец тела цикла
// }

// Взаимодействие: alert, prompt, confirm

// alert("Hello");

// const str_for_alert = "Hi!";

// alert(str_for_alert);

// const obj_for_alert = { a: 2, b: 3 };
// alert(obj_for_alert);
// const arr_for_alert = [1, 2, 3, 4, 5, 6];
// console.log(arr_for_alert.toString());
// alert(arr_for_alert);

// prompt

// const propmt_age = prompt("Сколько тебе лет?", 100);
// alert(`${typeof propmt_age}`); // Тебе 100 лет!

// confirm

// confirm("Hi");
// const isListening = confirm("Вы внимательно читаете текст?");
// console.log(isListening);

// Date and time

const now_date_and_time = new Date();

// console.log(now_date_and_time);

const initial_date = new Date(1000 * 60 * 60);
// console.log(initial_date);

// year month day

// year day month

const date_in_string = new Date("2022-05-21");
// console.log(date_in_string);

// const accurate_date = new Date();

// Date methods

const now_methods = new Date();

// 1 - 30/31
// console.log("Month day", now_methods.getDate());

// 0 - 6
// console.log("Day in week", now_methods.getDay(), date_in_string.getDay());

// console.log("Year", now_methods.getFullYear());

// console.log("Hours", now_methods.getHours());
// console.log("Minutes", now_methods.getMinutes());
// console.log("Seconds", now_methods.getSeconds());
// console.log("TimezoneOffset", now_methods.getTimezoneOffset());

// Чистые функции / Функции высшего порядка
// const sum = (a, b) => {
//   return a + b;
// };

// const getDate = () => {
//   return new Date();
// };
let x = 2;

// const add_two_dirty = (y) => {
//   x += y;
// };

// add_two_dirty(2); // x === 4
// console.log(x);

const add_two_pure = (a, b) => a + b;
// console.log(add_two_pure(x, 2));

// console.log(x);

// Side Effects

const impureDouble = (x) => {
  // console.log("doubling", x);
  return x * 2;
};
const result = impureDouble(4);

const b = "world";
// console.log({ a: "hi", b });
// console.log({ result });
// equal

// console.log({ result: result });

const objMutation = (key, value, object) => (object[key] = value);

const person = {
  name: "Bobo",
};

const resultDirty = objMutation("shoeSize", 400, person);

// console.log(person);

const objImmutation = (key, value, object) => {
  return { ...object, [key]: value };
};

const person2 = {
  name: "Bobo",
};
const resultPerson2 = objImmutation("shoeSize", 400, person2);

// console.log({
//   result: resultPerson2,
//   person2,
// });

// Функции высшего порядка

// примеры в лекции
// https://github.com/alex-sefer-98226/fe_for_be-course/blob/main/lesson_4.md#:~:text=%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D1%8F%D0%BC%D0%B8%20%D0%B2%D1%8B%D1%81%D1%88%D0%B5%D0%B3%D0%BE%20%D0%BF%D0%BE%D1%80%D1%8F%D0%B4%D0%BA%D0%B0.-,%D0%9F%D1%80%D0%B8%D0%BC%D0%B5%D1%80,-%E2%84%961%3A
const forEachHandler = (elem, index, arr) => {
  // console.log(elem + 2);
};

const arr = [1, 2, 3, 4, 5];

// arr.forEach(forEachHandler);

for (let index = 0; index < arr.length; index++) {
  forEachHandler(arr[index], index, arr);
}

// Каррирование
let greetCurried = function (greeting) {
  return function (name) {
    return greeting + ", " + name;
  };
};
greetCurried("Hello")("Students");

const hiFunc = greetCurried("Hi");

// console.log(hiFunc("Teacher"));
// console.log(hiFunc("People"));

function multiply(a) {
  return (b) => {
    return (c) => {
      return a * b * c;
    };
  };
}

// 2, 2, 2
// 2, 2, 3
// 2, 2, 6

const calculate = multiply(2)(2);

// console.log(calculate(2));
// console.log(calculate(3));
// console.log(calculate(6));
// let greetHello = greetCurried("Hello");
// greetHello("Heidi"); //"Hello, Heidi"
// greetHello("Eddie"); //"Hello, Eddie"

// Пример на сумме

// function sum(a, b, c, d) {
//   return a + b + c + d;
// }
// console.log(sum(1, 2, 3, 4));

// function carriedSum(a) {
//   return function (b) {
//     return function (c) {
//       return function (d) {
//         return a + b + c + d;
//       };
//     };
//   };
// }

// console.log(carriedSum(1)(2)(3)(4));

// Контекст выполнения функции в JavaScript

// const user = {
//   name: "John Smith",
//   getName: function () {
//     console.log(this.name);
//   },
// };
// user.getName();

// this

function getName() {
  console.log(this.name);
}
const person_context = {
  name: "Vlad",
};
const animal = {
  name: "Bobik",
};
person_context.testMethod = getName;
animal.testMethod = getName;
// person_context.testMethod();
// animal.testMethod();

// Contenxt loss

// let user = {
//   name: "Джон",
//   hi: function () {
//     console.log(this.name);
//   },
// };
// user.hi();
// разделим получение метода объекта и его вызов в разных строках
// let method_of_object = user.hi;
// method_of_object();
// hi(); // Ошибка, потому что значением this является undefined

// No this in arrow function

let user_in_arrow = {
  firstName: "Илья",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  },
};

// user_in_arrow.sayHi(); // Илья

// call

// let user = {
//   name: "Джон",
//   hi: function () {
//     alert(this.name);
//   },
// };
// разделим получение метода объекта и его вызов в разных строках
// let hi = user.hi;
// hi();
// hi.call(user);
// hiv.call({ name: "Alex" });

// rest

// rest && spread
// function myFunc(...rest) {}

// const myObj = {
//   a: 2,
//   c: 3,
//   name: "Igor",
// };

// const secondObj = {
//   ...myObj,

//   b: 3,
// };

// console.log("Myobj", myObj);

// console.log(secondObj);

// const arr = [1, 2, 3];

// const arr2 = [3, 4, 5];

// const finalArr = [...arr, ...arr2];
// console.log(finalArr);

// apply

let user = {
  name: "Джон",
  hi: function (surname, age) {
    alert(`${this.name} ${surname}, ${age}`);
  },
};

// user.hi("Уик", 42);

const method = user.hi;

// method("Уик", 42);
// method.call(user, "Уик", 42);
// ..rest

// method.apply(context, [arg1,arg2, ..., argN])
// method.apply({ name: "Andrew" }, ["Surname", 32, 32, 23, 23, 23, 23]);

function myFunc(a, ...rest) {
  console.log(a);
  console.log("Rest props", rest);
}
myFunc(2);

myFunc(1, 2, 3, 4, 5);
