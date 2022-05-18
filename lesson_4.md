# Вычисляемое свойство js

Вычисляемое свойство - свойство, которое можно посчитать.

Как мы обращались к свойствам объекта раньше:

```
const person = {
  name: 'Vlad'
};
person.name; // Vlad
```

Вычисляемое свойство:

```
const person = {
  name: 'Vlad',
};
person['na' + 'me']; // Vlad
```

# for...in - проходит по свойствам объекта

Цикл for...in проходит по всем перечисляемым свойствам объекта.

Перечисляемым является свойство, значение поля enumerable дескриптора которого установлено в true.

Синтаксис цикла for...in.

```
for(let наименование_свойства in объект){
  действие_1
  ...
  действие_N
}
```

Для каждой итерации цикла значением блочной переменной наименование_свойство устанавливается последующее наименование ключа объекта.

```
const person = {
    name: 'Ivan',
    lastName: 'Ivanov',
    age: 30
};
for (const key in person) {
    console.log('key: ', key);
};
// Результат
key:  name
key:  lastName
key: age
```

Пример:

```
let person = {
  firstName: 'Jake',
  lastName: 'Mitchel',
  birthDate: '04.09.2001'
};
for(let property in person)
  console.log(`Property: ${property}, value: ${person[property]}`);
  
/*
Результат в консоли:
  
Property: firstName, value: Jake
Property: lastName, value: Mitchel
Property: birthDate, value: 04.09.2001
*/
```

Использование for...in на примере массива

```
let arr = ['Hello', 'world', '!'];
for(let property in arr)
  console.log(property);
  
// Результат в консоли: 0 1 2
```

Поскольку ключами в обычном массиве являются индексы, то значением переменной property поочередно будут соответственно 0, 1 и 2.

# for...of

Для простого прохождения по элементам массива используется цикл for...of.

В процессе выполнения цикла не предоставляется никакой информации об индексе текущего элемента.

Синтаксис цикла for...of:

```
for(let элемент_массива of массив){
  действие_1
  ...
  действие_N
}
```

Для каждой итерации массива объявляется переменная элемент_массива с блочной областью видимости в пределах этого массива.

```
let arr = [1, 2, 3];
for(let item of arr)
  console.log(item);
// Результат в консоли: 1 2 
```

# Перебор массива через for

```
const arr = [1,2,3,4];
for(let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

# Использование continue и break

В JavaScript при работе с циклами возможно использование двух конструкций: continue и break.

Ключевое слово continue прерывает выполнение текущей итерации цикла и запускает следующую.

Рассмотрим на примере.

```
let arr = [2, 0, 4, 8];
for(let item of arr){
  if(item === 0)
    continue;
  
  console.log(item / 2);
}
// Результат в консоли: 1 2 4
```

# Взаимодействие: alert, prompt, confirm

**alert**

Эта функция показывает сообщение и ждёт, пока пользователь нажмёт кнопку «ОК».

Например:

```
alert("Hello");
```

Это небольшое окно с сообщением называется модальным окном.

Понятие модальное означает, что пользователь не может взаимодействовать с интерфейсом остальной части страницы, нажимать на другие кнопки и т.д. до тех пор, пока взаимодействует с окном.

В данном случае – пока не будет нажата кнопка «OK».


# prompt

Функция prompt принимает два аргумента:

```
const result = prompt(title, [default]);
```

Этот код отобразит модальное окно с текстом, полем для ввода текста и кнопками OK/Отмена.

- title.

Текст для отображения в окне.

- default

Необязательный второй параметр, который устанавливает начальное значение в поле для текста в окне.

Квадратные скобки вокруг default в описанном выше синтаксисе означают, что параметр факультативный, необязательный.

**Вызов prompt возвращает текст, указанный в поле для ввода, или null, если ввод отменён пользователем.**

```
let age = prompt('Сколько тебе лет?', 100);
alert(`Тебе ${age} лет!`); // Тебе 100 лет!
```

# confirm

```
const result = confirm(question);
```

Функция confirm отображает модальное окно с текстом вопроса question и двумя кнопками: OK и Отмена.

Результат – true, если нажата кнопка OK. В других случаях – false.

```
let isBoss = confirm("Ты здесь главный?");
alert( isBoss ); // true, если нажата OK
```

Давайте напишем функцию, которая будет обрабатывать возраст юзера.

# Дата и Время

Для создания нового объекта Date нужно вызвать конструктор new Date()

Для создания нового объекта Date нужно вызвать конструктор new Date() с одним из следующих аргументов:

- new Date()

Текущая дата и время

```
let now = new Date();
alert( now ); // показывает текущие дату и время
```

- new Date(milliseconds)

Создать объект Date с временем, равным количеству миллисекунд (тысячная доля секунды), прошедших с 1 января 1970 года UTC+0.

```
// 0 соответствует 01.01.1970 UTC+0
let Jan01_1970 = new Date(0);
alert( Jan01_1970 );
// теперь добавим 24 часа и получим 02.01.1970 UTC+0
let Jan02_1970 = new Date(24 * 3600 * 1000);
alert( Jan02_1970 );
```

- new Date(datestring)

Если аргумент всего один, и это строка, то из неё «прочитывается» дата

```
let date = new Date("2017-01-26");
alert(date);
// Время не указано, поэтому оно ставится в полночь по Гринвичу и
// меняется в соответствии с часовым поясом места выполнения кода
// Так что в результате можно получить
// Thu Jan 26 2017 11:00:00 GMT+1100 (восточно-австралийское время)
// или
// Wed Jan 25 2017 16:00:00 GMT-0800 (тихоокеанское время)
```

- new Date(year, month, date, hours, minutes, seconds, ms)

Создать объект Date с заданными компонентами в местном часовом поясе. Обязательны только первые два аргумента.

- year должен состоять из четырёх цифр: значение 2013 корректно, 98 – нет.
- month начинается с 0 (январь) по 11 (декабрь).
- Параметр date здесь представляет собой день месяца. Если параметр не задан, то принимается значение 1.
- Если параметры hours/minutes/seconds/ms отсутствуют, их значением становится 0.

```
new Date(2011, 0, 1, 0, 0, 0, 0); // // 1 Jan 2011, 00:00:00
new Date(2011, 0, 1); // то же самое, так как часы и проч. равны 0
```

# Методы date

- date.getDate()

Возвращает день месяца (1-31) указанной даты по местному времени.

- date.getDay()

Возвращает день недели (0-6) указанной даты по местному времени.

- date.getFullYear()

Возвращает год (4 цифры для 4-х значного года) указанной даты по местному времени.

- date.getHours()

Возвращает часы (0-23) указанной даты по местному времени.

- date.getMinutes()

Возвращает минуты (0-59) указанной даты по местному времени.

- date.getMonth()

Возвращает месяц (0-11) указанной даты по местному времени.

- date.getSeconds()

Возвращает секунды (0-59) указанной даты по местному времени.

- date.getTimezoneOffset()

Возвращает смещение часового пояса в минутах для текущей локали.

# Чистые функции / Функции высшего порядка

Функция должна удовлетворять двум условиям, чтобы считаться «чистой»:

— Каждый раз функция возвращает одинаковый результат, когда она вызывается с тем же набором аргументов

— Нет побочных эффектов

Рассмотрим подробнее.

- Одинаковый вход => Одинаковый выход

Сравните это:

```
const add = (x, y) => x + y;
add(2, 4); // 6
```

С этим:

```
let x = 2;
const add = (y) => {
  x += y;
};
add(4); // x === 6
```

В первом случае значение возвращается на основании заданных параметров, независимо от того, где/когда вы его вызываете.

Если вы сложите 2 и 4, всегда получите 6.

Ничего не влияет на результат.

**Нечистые функции = непостоянные результаты**

Второй пример ничего не возвращает. Он полагается на общее состояние для выполнения своей работы путем увеличения переменной за пределами своей области.

Эта модель кошмар для разработчиков.

Разделяемое состояние вводит зависимость от времени. Вы получаете разные результаты в зависимости от того, когда вы вызвали функцию. В первый раз результат 6, в следующий раз 10 и так далее.

# Нет побочных эффектов

Примеры побочных эффектов:

- Видоизменение входных параметров
- console.log
- HTTP вызовы (AJAX/fetch)
- Изменение в файловой системе
- Запросы DOM

По сути, любая работа, выполняемая функцией, не связана с вычислением конечного результата.

Вот “нечистая” функция с побочным эффектом.

```
const impureDouble = (x) => {
  console.log('doubling', x);
  return x * 2;
};
const result = impureDouble(4);
console.log({ result });
```

console.log здесь это побочный эффект, но он не повредит. Мы все равно получим те же результаты, учитывая те же данные.

"Нечистое" изменение объекта

```
const objMutation = (key, value, object) => {
  object[key] = value;
};
const person = {
  name: 'Bobo'
};
const result = objMutation('shoeSize', 400, person);
console.log({
  person,
  result
});
```

Переменная person была изменена навсегда, потому что функция была объявлена через оператор присваивания.

Мы можем очистить objMutation, просто вернув новый объект с желаемыми свойствами.

```
const objMutation = (key, value, object) => ({
  ...object,
  [key]: value
});
const person = {
  name: 'Bobo'
};
const result = objMutation('shoeSize', 400, person);
console.log({
  person,
  result
});
```

# Функции высшего порядка

Это функции, которые работают с другими функциями, либо принимая их в виде параметров, либо возвращая их.

Проще говоря, функцией высшего порядка называется такая функция, которая принимает функцию как аргумент или возвращает функцию в виде выходного значения.

Например, встроенные функции JavaScript Array.prototype.map, Array.prototype.filter и Array.prototype.reduce являются функциями высшего порядка.

Пример №1:

Предположим, у нас имеется массив чисел, и мы хотим создать новый массив, который содержит результаты умножения этих чисел на 2.

Рассмотрим способы решения этой задачи с использованием функций высшего порядка и без них.

- Решение задачи без использования функций высшего порядка

```
const arr1 = [1, 2, 3];
const arr2 = [];
for(let i = 0; i < arr1.length; i++) {
  arr2.push(arr1[i] * 2);
}
// выводит [ 2, 4, 6 ]
console.log(arr2);
```

- Решение задачи с помощью функции высшего порядка map

```
const arr1 = [1, 2, 3];
const arr2 = arr1.map(function(item) {
  return item * 2;
});
console.log(arr2);
```

Пример №2:

Предположим, у нас имеется массив, содержащий год рождения неких людей, и нам надо создать массив, в который попадёт их возраст в 2018 году.

Рассмотрим, как и прежде, решение этой задачи в двух вариантах.

- Решение задачи без использования функций высшего порядка

```
const birthYear = [1975, 1997, 2002, 1995, 1985];
const ages = [];
for(let i = 0; i < birthYear.length; i++) {
  let age = 2018 - birthYear[i];
  ages.push(age);
}
// выводит [ 43, 21, 16, 23, 33 ]
console.log(ages)
```

- Решение задачи с помощью функции высшего порядка map

```
const birthYear = [1975, 1997, 2002, 1995, 1985];
const ages = birthYear.map(year => 2018 - year);
// выводит [ 43, 21, 16, 23, 33 ]
console.log(ages);
```

# Каррирование

Продвинутая техника для работы с функциями. Она используется не только в JavaScript, но и в других языках.

Каррирование – это трансформация функций таким образом, чтобы они принимали аргументы не как f(a, b, c), а как f(a)(b)(c)

Каррирование не вызывает функцию. Оно просто трансформирует её.

Наше первое карри:

```
let greetCurried = function(greeting) {
  return function(name) {
    console.log(greeting + ", " + name);
  };
};
let greetHello = greetCurried("Hello");
greetHello("Heidi"); //"Hello, Heidi"
greetHello("Eddie"); //"Hello, Eddie"
```


Пример 1:

Без каррирования:

```
function multiply(a, b, c) {
    return a * b * c;
}
multiply(1,2,3); // 6
```

С каррированием:

```
function multiply(a) {
    return (b) => {
        return (c) => {
            return a * b * c
        }
    }
}
log(multiply(1)(2)(3)) // 6
```

```
function curry(f) { // curry(f) выполняет каррирование
  return function(a) {
    return function(b) {
      return f(a, b);
    };
  };
}
// использование
function sum(a, b) {
  return a + b;
}
let carriedSum = curry(sum);
alert( carriedSum(1)(2) ); // 3
```

Как вы видите, реализация довольна проста: это две обёртки

- Результат curry(func) – обёртка function(a).
- Когда она вызывается как sum(1), аргумент сохраняется в лексическом окружении и возвращается новая обёртка function(b).
- Далее уже эта обёртка вызывается с аргументом 2 и передаёт вызов к оригинальной функции sum.



# Контекст выполнения функции в JavaScript

Контекст выполнения функции — это одно из фундаментальных понятий в JavaScript.

Контекстом еще часто называют значение переменной this внутри функции.

- Переменная this:

Значение переменной this чаще всего определяется тем, как вызывается функция.

Когда функция вызывается как метод объекта, переменная this приобретает значение ссылки на объект, который вызывает этот метод:

```
const user = {
    name: 'John Smith',
    getName: function() {
        console.log(this.name);
    }
};
user.getName();   // John Smith
```

Итак, мы знаем, что this – это текущий объект при вызове «через точку»

# «this» не является фиксированным

В JavaScript ключевое слово «this» ведёт себя иначе, чем в большинстве других языков программирования.

Оно может использоваться в любой функции.

```
function getName() {
    console.log(this.name);
};
const person = {
    name: 'Vlad'
};
const animal = {
    name: 'Bobik'
};
person.testMethod = getName;
animal.testMethod= getName;
person.testMethod();
animal.testMethod();
```

# Потеря контекста

Передача метода отдельно от объекта

```
let user = {
    name: "Джон",
    hi: function () {
        alert(this.name);
    }
};
// разделим получение метода объекта и его вызов в разных строках
let hi = user.hi;
hi(); // Ошибка, потому что значением this является undefined
```

Как это исправить?

# У стрелочных функций нет «this»

Стрелочные функции особенные:

у них нет своего «собственного» this.

Если мы используем this внутри стрелочной функции, то его значение берётся из внешней «нормальной» функции.

Например, здесь arrow() использует значение this из внешнего метода user.sayHi():

```
let user = {
  firstName: "Илья",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  }
};
user.sayHi(); // Илья
```

Как этот this переопределить?

- Метод call

Синтаксис метода call:

```
func.call(context, arg1, arg2, ...)
```

При этом вызывается функция func, первый аргумент call становится её this, а остальные передаются «как есть».

**Вызов func.call(context, a, b...) – то же, что обычный вызов func(a, b...), но с явно указанным this(=context).**

```
const test = {
    first: 'a',
    getA: function() {
        console.log(this.first);
    }
};
const test2 = {
    first: 'b'
};
test.getA.call(test2);
```

Так же работает с функциями:

```
function test() {
  console.log(this);
  console.log(this.arg);
}
const obj = {
  arg: 'argument'
};
test.call(obj);
```

# Метод apply

Если нам неизвестно, с каким количеством аргументов понадобится вызвать функцию, можно использовать более мощный метод: apply.

Вызов функции при помощи func.apply работает аналогично func.call, но принимает массив аргументов вместо списка.

```
func.call(context, arg1, arg2);
// идентичен вызову
func.apply(context, [arg1, arg2]);
```

В частности, эти две строчки сработают одинаково:


```
showFullName.call(user, 'firstName', 'surname');
showFullName.apply(user, ['firstName', 'surname']);
```

# Глобальные объекты

В браузере это объект window

```
var foo = 42;
console.log(window.foo); // 42
 
const bar = 'top kek';
console.log(window.bar); // undefined
 
window.baz = 'JavaScript <3';
console.log(baz); // JavaScript <3
```

В Node.js тоже есть глобальный объект global

```
var foo = 42;
console.log(global.foo); // 42
```

# Объекты в JavaScript

- Нативные объекты
- Хост объекты
- Пользовательские объекты

# Нативные объекты

Нативными (native object) объектами в JS называют объекты, свойства и поведение которых описаны в спецификации языка JavaScript.

Их наличие не зависит от того окружения, где запускается код.

```
 Object, Array, Date, Math
 
```
# Хост объекты

Хост (host object) объектами в JS называют объекты, которые предоставляются окружением (зависят от того, где работает код)

```
Например, для браузеров это будут document, location, history, XMLHttpRequest, setTimeout, setInterval
```

# Литерал объекта

Объявление через {...} называют литералом объекта или литеральной нотацией.

# Прототипное наследование

Например, у нас есть объект user со своими свойствами и методами, и мы хотим создать объекты admin и guest как его слегка изменённые варианты.

Мы хотели бы повторно использовать то, что есть у объекта user, не копировать/переопределять его методы, а просто создать новый объект на его основе.

Прототипное наследование — это возможность языка, которая помогает в этом.

# [[Prototype]]

В JavaScript объекты имеют специальное скрытое свойство [[Prototype]] (так оно названо в спецификации), которое либо равно null, либо ссылается на другой объект. Этот объект называется «прототип»:

Свойство [[Prototype]] является внутренним и скрытым, но есть много способов задать его.

Одним из них является использование __proto__, например так:

```
const animal = {
    eats: true
};
const rabbit = {
    jumps: true,
};
const lions = {
    roar: true,
};
rabbit.__proto__ = animal;
lions.__proto__ = animal;
rabbit.jumps; // true
rabbit.eats; // true
```

Так же можно наследовать методы:

```
const animal = {
    eats: true,
    walk() {
        console.log("Walk");
    }
};
const rabbit = {
    jumps: true,
};
const lions = {
    roar: true,
};
rabbit.__proto__ = animal;
lions.__proto__ = animal;
rabbit.walk(); // Walk
rabbit.eats; // true
```

```
let animal = {
    eats: true,
    walk() {
        alert("Animal walk");
    }
};
let rabbit = {
    jumps: true,
    __proto__: animal
};
// walk взят из прототипа
rabbit.walk(); // Animal walk
```

# Операция записи не использует прототип

В приведённом ниже примере мы присваиваем rabbit собственный метод walk:

```
let animal = {
  eats: true,
  walk() {
    /* этот метод не будет использоваться в rabbit */
  }
};
let rabbit = {
  __proto__: animal
};
rabbit.walk = function() {
  alert("Rabbit! Bounce-bounce!");
};
rabbit.walk(); // Rabbit! Bounce-bounce!
```

Теперь вызов rabbit.walk() находит метод непосредственно в объекте и выполняет его, не используя прототип


# Значение «this»

Неважно, где находится метод: в объекте или его прототипе.

При вызове метода this — всегда объект перед точкой.


```
// методы animal
let animal = {
    walk() {
        if (!this.isSleeping) {
            alert(`I walk`);
        }
    },
    sleep() {
        this.isSleeping = true;
    }
};
let rabbit = {
    name: "White Rabbit",
    __proto__: animal
};
// модифицирует rabbit.isSleeping
rabbit.sleep();
alert(rabbit.isSleeping); // true
alert(animal.isSleeping); // undefined (нет такого свойства в прототипе)
```


# Методы конструктора Object

- Object.assign()

Создаёт новый объект путём копирования значений всех собственных перечислимых свойств из одного или более исходных объектов в целевой объект.

```
const obj = { a: 1 };
const copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }
```

- Object.create()

Создаёт новый объект с указанными объектом прототипа и свойствами.

```
const human = {
    test: true,
};
const Vova = Object.create(human);
// Vova.__proto__ === human
```

- Object.freeze()

Замораживает объект: другой код не сможет удалить или изменить никакое свойство.

```
const person = {
    name: 'Petya',
};
person.age = 5;
const person1 = Object.freeze(person);
person1.test = '123';
console.log(person1); // {  name: 'Petya', age: 5  }. Свойство test не записалось
```

- Object.getOwnPropertyNames()

Возвращает массив, содержащий имена всех переданных объекту **собственных** перечисляемых и неперечисляемых свойств

```
const object1 = {
  a: 1,
  b: 2,
  c: 3
};
console.log(Object.getOwnPropertyNames(object1));
// expected output: Array ["a", "b", "c"]
```

- Object.keys()

Возвращает массив, содержащий имена всех **собственных** перечислимых свойств переданного объекта.

```
const arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); // консоль: ['0', '1', '2']
const person = {
 name: 'Test',
 age: '100'
};
console.log(Object.keys(person)); // консоль: ['name', 'age']
```

- Object.values()

Возвращает массив, содержащий value всех **собственных** перечислимых свойств переданного объекта.

```
const person = {
    name: 'Petya',
    age: 20
};
console.log(Object.values(person)); // ['Petya', 20]
```

# Конструкторы, создание объектов через "new"

Обычный синтаксис {...} позволяет создать только один объект.

Но зачастую нам нужно создать множество однотипных объектов, таких как пользователи, элементы меню и т.д.

Это можно сделать при помощи функции-конструктора и оператора "new".


# Функция-конструктор

Функции-конструкторы являются обычными функциями. Но есть два соглашения:

- Имя функции - конструктора должно начинаться с большой буквы.
- Функция - конструктор должна вызываться при помощи оператора "new".

```
function Person(name, lastName, age, dream) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.dream = dream;
};
const firstUser = new Person('Vova', 'Testovich', '22', 'Become a ninja');
firstUser.name; // Vova
firstUser.nlastNameame; // Testovich
firstUser.dream; // Become a ninja
```

Когда функция вызывается как new Person(...), происходит следующее:

- Создаётся новый пустой объект, и он присваивается this.
- Выполняется код функции. Обычно он модифицирует this, добавляет туда новые свойства.
- Возвращается значение this.

Другими словами, вызов new User(...) делает примерно вот что:

```
function Person(name, lastName, age, dream) {
  // this = {};  (неявно)
  // добавляет свойства к this
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.dream = dream;
  // return this;  (неявно)
}
```

# new.target

Используя специальное свойство new.target внутри функции, мы можем проверить, вызвана ли функция при помощи оператора new или без него.

```
function Person() {
    alert(new.target);
}
// без "new":
Person(); // undefined
// с "new":
new Person(); // function User { ... }
```

# Свойство constructor

Свойство constructor - содержит ссылку на конструктор, которым объект был создан.

```
[].constructor; //Array;
({}).constructor; //Object;
function User() {};
new User().constructor; //User
```


```
function User() {};
alert(User.prototype.constructor); //User
User.prototype = {
	sayHi: function(){}
};
alert(User.prototype.constructor); //Object
```


# Оператор instanceof

Оператор instanceof позволяет проверить, с помощью какого конструктора создан объект.

Если объект создан с помощью определенного конструктора, то оператор возвращает true:

```
function User(...) {...}
const tom = new User("Том", 26);
 
const isUser = tom instanceof User;
const isCar = tom instanceof Car;
console.log(isUser);    // true
console.log(isCar);     // false
```

# Добавление метода к конструктору объекта

Функция конструктора также может определять методы:

```
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.name = function() {return this.firstName + " " + this.lastName;};
}
```

Нельзя добавлять новые методы к конструктору объекта тем же способом, как это делается в случае с существующим объектом.

Добавление методов к объекту должно происходить внутри функции конструктора:

```
function Person(firstName, lastName, age, eyeColor) {
    this.firstName = firstName;  
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;
    this.changeAge = function (newAge) {
        this.age = newAge;
    };
} 
const person1 = new Person('Vova', 'Testovich', 10, grey);
person1.age; // 10
person1.changeName(11);
person1.age; // 11
```

JavaScript знает, о каком объекте идет речь, "подставляя" в ключевое слово this объект

# F.prototype

```
let animal = {
  eats: true
};
function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype = animal;
let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal
alert( rabbit.eats ); // true
```

Если в F.prototype содержится объект, оператор new устанавливает его в качестве [[Prototype]] для нового объекта.

Обратите внимание, что F.prototype означает обычное свойство с именем "prototype" для F.

Это ещё не «прототип объекта», а обычное свойство F с таким именем.

Установка Rabbit.prototype = animal буквально говорит интерпретатору следующее:

"При создании объекта через new Rabbit() запиши ему animal в [[Prototype]]".

F.prototype используется только в момент вызова new F()


# F.prototype по умолчанию, свойство constructor

У каждой функции по умолчанию уже есть свойство "prototype".

По умолчанию "prototype" – объект с единственным свойством constructor, которое ссылается на функцию-конструктор.

```
function Rabbit() {}
/* прототип по умолчанию
Rabbit.prototype = { constructor: Rabbit };
*/
```

Проверим это:

```
function Rabbit() {}
// по умолчанию:
// Rabbit.prototype = { constructor: Rabbit }
alert( Rabbit.prototype.constructor == Rabbit ); // true
```

Соответственно, если мы ничего не меняем, то свойство constructor будет доступно всем кроликам через [[Prototype]]:

```
function Rabbit() {}
// по умолчанию:
// Rabbit.prototype = { constructor: Rabbit }
let rabbit = new Rabbit(); // наследует от {constructor: Rabbit}
alert(rabbit.constructor == Rabbit); // true (свойство получено из прототипа)
```

**JavaScript сам по себе не гарантирует правильное значение свойства "constructor".**

```
function Rabbit() {}
Rabbit.prototype = {
  jumps: true
};
let rabbit = new Rabbit();
alert(rabbit.constructor === Rabbit); // false
```

# Возврат значения из конструктора return

Обычно конструкторы ничего не возвращают явно. Их задача – записать все необходимое в this, который в итоге станет результатом.

Но если return всё же есть, то применяется простое правило:

- При вызове return с объектом, будет возвращён объект, а не this.
- При вызове return с примитивным значением, примитивное значение будет отброшено.

```
function Person() {
  this.name = "Вася";
  return { name: "Godzilla" };  // <-- возвращает этот объект
}
alert( new Person().name );  // Godzilla, получили этот объект
function Person1() {
  this.name = "Вася";
  return; // <-- возвращает this
}
alert( new Person1().name );  // Вася
```

# Отсутствие скобок

```
let user = new User; // <-- без скобок
// то же, что и
let user = new User();
```


# Prototype для нативных объектов

Через prototype мы можем создавать свои методы для нативных объектов таких как Array, Object и т.д.

Давайте сделать свой метод для массива

```
Array.prototype.sayHello = function () {
    console.log('Hello! Im array');
};
const arr = [1, 2, 3];
arr.sayHello(); // Hello! Im array
```

Давайте сделаем свой метод для объекта

```
Object.prototype.getName = function (params) {
    console.log('Hello! Im object');
};
const person = {
    test1: 1,
    test2: 2,
};
person.getName();
```
