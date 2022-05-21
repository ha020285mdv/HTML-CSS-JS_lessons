// parse

// float
// console.log(parseFloat(3.14));
// console.log(parseFloat("3.14"));
// console.log(parseFloat("314e-2"));
// console.log(parseFloat("0.0314E+2"));
// console.log(parseFloat("3.14какие-нибудь не цифровые знаки"));

// int

// console.log(parseInt(" 0xF", 16));
// console.log(parseInt(" F", 16));
// console.log(parseInt("17", 8));
// console.log(parseInt(021, 8));
// console.log(parseInt("015", 10));
// console.log(parseInt(15.99, 10));
// console.log(parseInt("FXX123", 16));
// console.log(parseInt("1111", 2));
// console.log(parseInt("15*3", 10));
// console.log(parseInt("15e2", 10));
// console.log(parseInt("15px", 10));
// console.log(parseInt("12", 13));

//
// console.log(parseInt("Hello", 8)); // Не является числом
// console.log(parseInt("546", 2));

// window

// function sayHi() {
//   alert("Hello");
// }

// window.sayHi();
// console.log(window.innerHeight);

// BOM

// alert(location.href); // показывает текущий URL
// if (confirm("Перейти на Wikipedia?")) {
//   location.href = "https://wikipedia.org"; // перенаправляет браузер на другой URL
// }

// DOM (Document Object Model)

// заменим цвет фона на красный,
// document.body.style.background = "red";

// console.log(document);

// getElement*, querySelector*, getElementsBy*

// console.log(x);

// console.log(document.getElementsByTagName("li"));

// Изменение документа

// let li = document.createElement('li');

// let text = document.createTextNode('Some text');

// Методы вставки

// append

// prepend

// before

// after

// replaceWith

// remove

// let div = document.createElement("div");
// div.className = "alert";
// div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";
// document.body.append(div);
// div.remove();
