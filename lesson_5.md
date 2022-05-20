# parseInt parseFloat

Функция parseFloat() принимает строку в качестве аргумента и возвращает десятичное число (число с плавающей точкой)

```
parseFloat(3.14);
parseFloat('3.14');
parseFloat('314e-2');
parseFloat('0.0314E+2');
parseFloat('3.14какие-нибудь не цифровые знаки');
// 3.14
```

Функция parseInt() принимает строку в качестве аргумента и возвращает целое число в соответствии с указанным основанием системы счисления.

```
parseInt(" 0xF", 16);
parseInt(" F", 16);
parseInt("17", 8);
parseInt(021, 8);
parseInt("015", 10);  //parseInt(015, 10); вернёт 15
parseInt(15.99, 10);
parseInt("FXX123", 16);
parseInt("1111", 2);
parseInt("15*3", 10);
parseInt("15e2", 10);
parseInt("15px", 10);
parseInt("12", 13);
// 15
```

```
parseInt("Hello", 8); // Не является числом
parseInt("546", 2);   // Неверное число в двоичной системе счисления
// все NaN
```


# Браузерное окружение, спецификации

Окружение предоставляет свои объекты и дополнительные функции, в дополнение базовым языковым. Браузеры, например, дают средства для управления веб-страницами. Node.js делает доступными какие-то серверные возможности и так далее.

На картинке ниже в общих чертах показано, что доступно для JavaScript в браузерном окружении:

![help](https://learn.javascript.ru/article/browser-environment/windowObjects.svg)

Как мы видим, имеется корневой объект window, который выступает в 2 ролях:

- Во-первых, это глобальный объект для JavaScript-кода, об этом более подробно говорится в главе Глобальный объект.
- Во-вторых, он также представляет собой окно браузера и располагает методами для управления им.

# window

```
function sayHi() {
  alert("Hello");
}
// глобальные функции доступны как методы глобального объекта:
window.sayHi();
```

А здесь мы используем window как объект окна браузера, чтобы узнать его высоту:

```
alert(window.innerHeight); // внутренняя высота окна браузера
```

# BOM (Browser Object Model)

Объектная модель браузера (Browser Object Model, BOM) – это дополнительные объекты, предоставляемые браузером (окружением), чтобы работать со всем, кроме документа.

- Объект navigator даёт информацию о самом браузере и операционной системе.

Среди множества его свойств самыми известными являются: navigator.userAgent – информация о текущем браузере, и navigator.platform – информация о платформе (может помочь в понимании того, в какой ОС открыт браузер – Windows/Linux/Mac и так далее).

- Объект location позволяет получить текущий URL и перенаправить браузер по новому адресу.


```
alert(location.href); // показывает текущий URL
if (confirm("Перейти на Wikipedia?")) {
  location.href = "https://wikipedia.org"; // перенаправляет браузер на другой URL
}
```

Функции **alert/confirm/prompt** тоже являются частью BOM: они не относятся непосредственно к странице, но представляют собой методы объекта окна браузера для коммуникации с пользователем.

# DOM (Document Object Model)

Document Object Model, сокращённо DOM – объектная модель документа, которая представляет все содержимое страницы в виде объектов, которые можно менять.

Объект document – основная «входная точка». С его помощью мы можем что-то создавать или менять на странице.

```
// заменим цвет фона на красный,
document.body.style.background = "red";
```

# Простейший DOM

```
<html>
  <head>
    <title>Заголовок</title>
  </head>
  <body>
     Прекрасный документ
   </body>
</html>
```

Самый внешний тег - <html>, поэтому дерево начинает расти от него.

Внутри <html> находятся два узла:
- <head> и <body> - они становятся дочерними узлами для <html>.

![help](https://javascript.ru/files/upload/jsintro/dom0.png)

Теги образуют узлы-элементы (element node).

Текст представлен текстовыми узлами (text node). И то и другое - равноправные узлы дерева DOM.

# Пример посложнее

Рассмотрим теперь более жизненную страничку:

```
<html>
    <head>
        <title>
            О лосях
        </title>
    </head>
    <body>
        Правда о лосях.
        <ol>
            <li>
                Лось - животное хитрое
            </li>
            <li>
                .. И коварное
            </li>
        </ol>
    </body>
</html>
```

Корневым элементом иерархии является html.

У него есть два потомка. Первый - head, второй - body.

И так далее, каждый вложенный тег является потомком тега выше:

![help](https://javascript.ru/files/learn/start/Losi.png)

На этом рисунке синим цветом обозначены элементы-узлы, черным - текстовые элементы.

Дерево образовано за счет синих элементов-узлов - тегов HTML.

А вот так выглядит дерево, если изобразить его прямо на HTML-страничке:

![help](https://javascript.ru/files/upload/jsintro/losi-dom.png)


# Поиск в DOM: getElement*, querySelector*, getElementsBy*

- document.getElementById или просто id

```
<span id="firstID">Hello World</span>
<script>
// Получить элемент в переменную
const mySpan = document.getElementById('firstID');
// сделать его фон красным
mySpan.style.background = 'red';
</script>
```
Только document.getElementById, а не anyElem.getElementById

Метод getElementById можно вызвать только для объекта document. Он осуществляет поиск по id по всему документу.

- getElementsBy

Возвращает элементы, которые имеют данный CSS-класс. **Возвращаем коллекцию**

```
<span class="className"></span>
<span class="className"></span>
<span class="className"></span>
<span class="className"></span>
// получить все элементы c классом "className" в документе
let spans = document.getElementsByclassName('className');
```

- getElementsByTagName(tag)

Ищет элементы с данным тегом и возвращает их коллекцию.

```
// получить все элементы div в документе
let divs = document.getElementsByTagName('div');
```

- querySelectorAll

Метод для поиска элементов в DOM по селектору


```
<ul>
  <li>Этот</li>
  <li>тест</li>
</ul>
<ul>
  <li>полностью</li>
  <li>пройден</li>
</ul>
<script>
  let elements = document.querySelectorAll('ul > li:last-child');
  for (let elem of elements) {
    alert(elem.innerHTML); // "тест", "пройден"
  }
</script>
```

# Типы DOM-элементов

У каждого элемента в DOM-модели есть тип.

Его номер хранится в атрибуте elem.nodeType

Всего в DOM различают **12 типов элементов**.

Обычно используется только один:

- Node.ELEMENT_NODE, номер которого равен 1. Элементам этого типа соответствуют HTML-теги.

Иногда полезен еще тип Node.TEXT_NODE, который равен 3. Это текстовые элементы.

# Изменение документа

Создание элемента

DOM-узел можно создать двумя методами:

- document.createElement(tag)

Создаёт новый элемент с заданным тегом:

```
let div = document.createElement('div');
```

- document.createTextNode(text)

Создаёт новый текстовый узел с заданным текстом:

```
let textNode = document.createTextNode('А вот и я');
```

# Методы вставки

Чтобы наш div появился, нам нужно вставить его где-нибудь в document. Например, в document.body.

Для этого есть метод append, в нашем случае: document.body.append(div).

Вот полный пример:

```
<style>
.alert {
  padding: 15px;
  border: 1px solid #d6e9c6;
  border-radius: 4px;
  color: #3c763d;
  background-color: #dff0d8;
}
</style>
<script>
  let div = document.createElement('div');
  div.className = "alert";
  document.body.append(div);
</script>
```

Вот методы для различных вариантов вставки:

- node.append(...nodes or strings) – добавляет узлы или строки в конец node,

- node.prepend(...nodes or strings) – вставляет узлы или строки в начало node,

- node.before(...nodes or strings) –- вставляет узлы или строки до node,

- node.after(...nodes or strings) –- вставляет узлы или строки после node,

- node.replaceWith(...nodes or strings) –- заменяет node заданными узлами или строками.

Вот пример использования этих методов, чтобы добавить новые элементы в список и текст до/после него:

```
<ol id="ol">
  <li>0</li>
  <li>1</li>
  <li>2</li>
</ol>
<script>
  ol.before('before'); // вставить строку "before" перед <ol>
  ol.after('after'); // вставить строку "after" после <ol>
  let liFirst = document.createElement('li');
  liFirst.innerHTML = 'prepend';
  ol.prepend(liFirst); // вставить liFirst в начало <ol>
  let liLast = document.createElement('li');
  liLast.innerHTML = 'append';
  ol.append(liLast); // вставить liLast в конец <ol>
</script>
```

before

1. prepend
2. 0
3. 1
4. 2
5. append

after


Наглядная иллюстрация того, куда эти методы вставляют:

![help](https://learn.javascript.ru/article/modifying-document/before-prepend-append-after.svg)


# Удаление узлов

Для удаления узла есть методы node.remove().

```
<style>
.alert {
  padding: 15px;
  border: 1px solid #d6e9c6;
  border-radius: 4px;
  color: #3c763d;
  background-color: #dff0d8;
}
</style>
<script>
  let div = document.createElement('div');
  div.className = "alert";
  div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";
  document.body.append(div);
  div.remove();
</script>
```

<h1>Pause</h1>

# reduce/reduceRight

Если нам нужно перебрать массив – мы можем использовать forEach, for или for..of.

Если нам нужно перебрать массив и вернуть данные для каждого элемента – мы используем map.

Методы arr.reduce и arr.reduceRight похожи на методы выше, но они немного сложнее. Они используются для вычисления какого-нибудь единого значения на основе всего массива.

Синтаксис:

```
let value = arr.reduce(function(previousValue, item, index, array) {
  // ...
}, [initial]);
```

Функция применяется по очереди ко всем элементам массива и «переносит» свой результат на следующий вызов.

Аргументы:

- previousValue – результат предыдущего вызова этой функции, равен initial при первом вызове (если передан initialБ а если не передан, то равен первому элементу массива),
- item – очередной элемент массива,
- index – его индекс,
- array – сам массив.


Примеры:

Тут мы получим сумму всех элементов массива всего одной строкой:

```
let arr = [1, 2, 3, 4, 5];
let result = arr.reduce((sum, current) => sum + current, 0);
alert(result); // 15
```

# setAttribute

Добавляет новый атрибут или изменяет значение существующего атрибута у выбранного элемента.

```
element.setAttribute(name, value);
```

- name - имя атрибута (строка).
- value  - значение атрибута.

В следующем примере, setAttribute() используется, чтобы установить атрибут disabled  кнопки <button>, делая её отключенной.

```
<button>Hello World</button>
<script>
const b = document.querySelector("button");
b.setAttribute("disabled", "disabled");
</script>
```


События:

Каждый элемент DOM содержит множество свойств on..., в которые вы можете занести тот или иной обработчик события:

Вот список самых часто используемых DOM-событий, пока просто для ознакомления:

- События мыши:

**click** – происходит, когда кликнули на элемент левой кнопкой мыши (на устройствах с сенсорными экранами оно происходит при касании).

**contextmenu** – происходит, когда кликнули на элемент правой кнопкой мыши.

**mouseover** / mouseout – когда мышь наводится на / покидает элемент.

**mousedown** / mouseup – когда нажали / отжали кнопку мыши на элементе.

**mousemove** – при движении мыши.

- События на элементах управления:

**submit** – пользователь отправил форму <form>.

**focus** – пользователь фокусируется на элементе, например нажимает на <input>.

- Клавиатурные события:

**keydown и keyup** – когда пользователь нажимает / отпускает клавишу.

- События документа:

**DOMContentLoaded** – когда HTML загружен и обработан, DOM документа полностью построен и доступен.

- CSS events:

**transitionend** – когда CSS-анимация завершена.


# Установка обработчиков

Для обработки событий вы можете назначить функцию-обработчик события путем присвоения ключа объекта

Так как у элемента DOM может быть только одно свойство с именем onclick, то назначить более одного обработчика так нельзя.

```
someElement.onmousemove = function(event){
    console.log(this, event);
}
someElement.onmousemove = function(event){ // перетрет прошлую функцию
    console.log('Hello');
}
```

Частые ошибки:

Функция должна быть присвоена как sayThanks, а не sayThanks().

```
// правильно
button.onclick = sayThanks;
// неправильно
button.onclick = sayThanks();
```

А вот в разметке, в отличие от свойства, скобки нужны:

```
<input type="button" id="button" onclick="sayThanks()">
```

# addEventListener

Фундаментальный недостаток описанных выше способов назначения обработчика –- невозможность повесить несколько обработчиков на одно событие.

Так же вы можете добавить несколько обработчиков на одно и тоже событие в одном и том же элементе, используя метод addEventListener:

Синтаксис:

```
element.addEventListener(event, handler[, options]);
```

- event

Имя события, например "click".

- handler

Ссылка на функцию-обработчик.

- options

Дополнительный объект со свойствами:

- once: если true, тогда обработчик будет автоматически удалён после выполнения.

- capture: фаза, на которой должен сработать обработчик, подробнее об этом будет рассказано в главе Всплытие и погружение.

Так исторически сложилось, что options может быть false/true, это то же самое, что {capture: false/true}.

- passive: если true, то указывает, что обработчик никогда не вызовет preventDefault(), подробнее об этом будет рассказано в главе Действия браузера по умолчанию.

```
someElement.addEventListener("mousemove",function(event){
    console.log(this, event);
});
```

# removeEventListener

Для удаления обработчика следует использовать removeEventListener:

```
element.removeEventListener(event, handler[, options]);
```

Пример:

```
function handler() {
  alert( 'Спасибо!' );
}
input.addEventListener("click", handler);
// ....
input.removeEventListener("click", handler);
```

# Обработчики некоторых событий можно назначать только через addEventListener

```
document.onDOMContentLoaded = function() {
  alert("DOM построен"); // не будет работать
};
document.addEventListener("DOMContentLoaded", function() {
  alert("DOM построен"); // а вот так сработает
});
```

Использование атрибута HTML

Обработчик может быть назначен прямо в разметке, в атрибуте, который называется on<событие>.

Например, чтобы назначить обработчик события click на элементе input, можно использовать атрибут onclick, вот так:


```
<input value="Нажми меня" onclick="alert('Клик!')" type="button">
```


# Данные, передаваемые в обработчик

В обработчик события передается два аргумента:

- this, который ссылается на элемент, на который "навешен" обработчик (это естественно, если вы занесли функцию в объект).

Используя this вы можете узнать любую информацию о элементе и навешивать один и тот же обработчик на несколько элементов, если вам нужно схожее поведение на многих элементах


- event, объект-событие, переданный первым аргументом в функцию-обработчик (вы можете назвать его как угодно).

С помощью этого объекта можно узнать информацию о событии (нажатые кнопки мыши и клавиатуры, положение курсора мыши, и т. п.), а так же управлять обработкой потока событий


# Объект события

При выполнении какого-то события нам часто надо получать какие-то данные, которые относятся к этому события.

Например координаты указателя мыши, какая клавиша нажата и так далее.

Для этого у нас есть объект event

```
<input type="button" value="Нажми меня" id="elem">
<script>
  elem.onclick = function(event) {
    // вывести тип события, элемент и координаты клика
    alert(event.type + " на " + event.target);
    alert("Координаты: " + event.clientX + ":" + event.clientY);
  };
</script>
```

# Некоторые свойства объекта event:

- event.type

Тип события, в данном случае "click"

- event.target

Элемент, на котором сработал обработчик.

Значение – обычно такое же, как и у this, но если обработчик является функцией-стрелкой или при помощи bind привязан другой объект в качестве this, то мы можем получить элемент из event.currentTarget.


# Разница между this и event.target

- this всегда будет указывать на тот элемент, на котором висит событие, которое мы вызвали

- event.target всегда будет указывать на элемент, который это событие вызвал



# Задание на сейчас

Добавьте JavaScript к кнопке button, чтобы при нажатии элемент <div id="text"> исчезал


# Формы, элементы управления

События: change, input, cut, copy, paste

- Событие: change

Событие change срабатывает по окончании изменения элемента.

Для текстовых <input> это означает, что событие происходит при потере фокуса.

Пока мы печатаем в текстовом поле в примере ниже, событие не происходит.

Но когда мы перемещаем фокус в другое место, например, нажимая на кнопку, то произойдёт событие change:

```
<input type="text" onchange="alert(this.value)">
<input type="button" value="Button">
```

Для других элементов: select, input type=checkbox/radio событие запускается сразу после изменения значения:

```
<select onchange="alert(this.value)">
  <option value="">Выберите что-нибудь</option>
  <option value="1">Вариант 1</option>
  <option value="2">Вариант 2</option>
  <option value="3">Вариант 3</option>
</select>
```


# Событие: input

Событие input срабатывает каждый раз при изменении значения.

В отличие от событий клавиатуры, оно работает при любых изменениях значений, даже если они не связаны с клавиатурными действиями: вставка с помощью мыши или распознавание речи при диктовке текста.

Например:

```
<input type="text" id="inputId"> oninput: <span id="result"></span>
<script>
    const inputId = document.getElementById('inputId');
    inputId.oninput = function () {
        result.innerHTML = inputId.value;
    };
</script>
```

# События: cut, copy, paste

Эти события происходят при вырезании/копировании/вставке данных.

Они относятся к классу ClipboardEvent и обеспечивают доступ к копируемым/вставляемым данным.

Мы также можем использовать event.preventDefault() для предотвращения действия по умолчанию, и в итоге ничего не скопируется/не вставится.

Например, код, приведённый ниже, предотвращает все подобные события и показывает, что мы пытаемся вырезать/копировать/вставить:

```
<input type="text" id="inputId">
<script>
    const inputId = document.getElementById('inputId');
    inputId.oncut = function (event) {
        console.log('oncut');
    }
    inputId.oncopy = function (event) {
        console.log('oncopy');
    }
    inputId.onpaste = function () {
        console.log('onpaste');
    }
</script>
```

# Отправка формы: событие и метод submit

При отправке формы срабатывает событие submit, оно обычно используется для проверки (валидации) формы перед её отправкой на сервер или для предотвращения отправки и обработки её с помощью JavaScript.

Метод form.submit() позволяет инициировать отправку формы из JavaScript.

Мы можем использовать его для динамического создания и отправки наших собственных форм на сервер.

Давайте посмотрим на них подробнее.

- Событие: submit

Есть два основных способа отправить форму:

- Первый – нажать кнопку <input type="submit"> или <input type="image">

- Второй – нажать Enter, находясь на каком-нибудь поле



В примере ниже:

1. Перейдите в текстовое поле и нажмите Enter.
2. Нажмите <input type="submit">.

Оба действия показывают alert и форма не отправится благодаря return false:

```
<form onsubmit="alert('submit!');return false">
    Первый пример: нажмите Enter: <input type="text" value="Текст"><br>
    Второй пример: нажмите на кнопку "Отправить": <input type="submit" value="Отправить">
</form>
```

# Отмена стандартного поведения Event.preventDefault()

Есть два способа отменить действие браузера:

- Основной способ – это воспользоваться объектом event.

Для отмены действия браузера существует стандартный метод event.preventDefault().

- Если же обработчик назначен через on<событие> (не через addEventListener), то также можно вернуть false из обработчика.

```
<a href="/" onclick="return false">Нажми здесь</a>
или
<a href="/" onclick="event.preventDefault()">здесь</a>
```

# Всплытие и погружение

Давайте начнём с примера.

Этот обработчик для div сработает, если вы кликните по любому из вложенных тегов, будь то em или code:

```
<div onclick="alert('Обработчик!')">
  <em>Если вы кликните на <code>EM</code>, сработает обработчик на <code>DIV</code></em>
</div>
```

Вам не кажется это странным? Почему же сработал обработчик на div, если клик произошёл на em?

# Всплытие

**Когда на элементе происходит событие, обработчики сначала срабатывают на нём, потом на его родителе, затем выше и так далее, вверх по цепочке предков.**

Например, есть 3 вложенных элемента FORM > DIV > P с обработчиком на каждом:

```
<style>
  body * {
    margin: 10px;
    border: 1px solid blue;
  }
</style>
<form onclick="alert('form')">FORM
  <div onclick="alert('div')">DIV
    <p onclick="alert('p')">P</p>
  </div>
</form>
```

Клик по внутреннему p вызовет обработчик onclick:

- Сначала на самом p.
- Потом на внешнем div.
- Затем на внешнем form.
- И так далее вверх по цепочке до самого document.

# Прекращение всплытия

```
<body onclick="alert(`сюда всплытие не дойдёт`)">
  <button onclick="event.stopPropagation()">Кликни меня</button>
</body>
```

# Погружение

Существует ещё одна фаза из жизненного цикла события – «погружение» (иногда её называют «перехват»).

Она очень редко используется в реальном коде, однако тоже может быть полезной.


Стандарт DOM Events описывает 3 фазы прохода события:

- Фаза погружения (capturing phase) – событие сначала идёт сверху вниз.
- Фаза цели (target phase) – событие достигло целевого(исходного) элемента.
- Фаза всплытия (bubbling stage) – событие начинает всплывать.

![help](https://learn.javascript.ru/article/bubbling-and-capturing/eventflow.svg)

Чтобы поймать событие на стадии погружения, нужно использовать третий аргумент capture вот так:

```
elem.addEventListener(..., {capture: true})
// или просто "true", как сокращение для {capture: true}
elem.addEventListener(..., true)
```

<h1>Pause</h1>

# Пример всплытия и погружения

```
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body * {
            margin: 10px;
            border: 1px solid blue;
        }
    </style>
</head>
<body>
    <form>FORM
        <div>DIV
            <p>P</p>
        </div>
    </form>
    <script>
        for (let elem of document.querySelectorAll('*')) {
            elem.addEventListener("click", e => alert(`Погружение: ${elem.tagName}`), true);
            elem.addEventListener("click", e => alert(`Всплытие: ${elem.tagName}`));
        }
    </script>
</body>
</html>
```

# Прекращение всплытия событий

Всплытие идёт с «целевого» элемента прямо наверх.

По умолчанию событие будет всплывать до элемента <html>, а затем до объекта document, а иногда даже до window, вызывая все обработчики на своём пути.

Но любой промежуточный обработчик может решить, что событие полностью обработано, и остановить всплытие.

Для этого нужно вызвать метод event.stopPropagation().

Например, здесь при клике на кнопку <button> обработчик body.onclick не сработает:

```
<body onclick="alert(`сюда всплытие не дойдёт`)">
  <button onclick="event.stopPropagation()">Кликни меня</button>
</body>
```


# event.stopImmediatePropagation()

Для того, чтобы полностью остановить обработку, существует метод event.stopImmediatePropagation().

Он не только предотвращает всплытие, но и останавливает обработку событий на текущем элементе.


# Планирование: setTimeout и setInterval

Мы можем вызвать функцию не в данный момент, а позже, через заданный интервал времени. Это называется «планирование вызова».

Для этого существуют два метода:

- setTimeout позволяет вызвать функцию один раз через определённый интервал времени.
- setInterval позволяет вызывать функцию регулярно, повторяя вызов через определённый интервал времени.

# setTimeout

```
let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)
```

Параметры:

- func|code

Функция или строка кода для выполнения. Обычно это функция. По историческим причинам можно передать и строку кода, но это не рекомендуется.

- delay

Задержка перед запуском в миллисекундах (1000 мс = 1 с). Значение по умолчанию – 0.

- arg1, arg2…

Аргументы, передаваемые в функцию (не поддерживается в IE9-)

Например, данный код вызывает sayHi() спустя одну секунду:

```
function sayHi() {
  alert('Привет');
}
setTimeout(sayHi, 1000);
```

```
function sayHi(phrase, who) {
  alert( phrase + ', ' + who );
}
setTimeout(sayHi, 1000, "Привет", "Джон"); // Привет, Джон
```

Если первый аргумент является строкой, то JavaScript создаст из неё функцию.

Это также будет работать:

```
setTimeout("alert('Привет')", 1000);
```

# Отмена через clearTimeout

Вызов setTimeout возвращает «идентификатор таймера» timerId, который можно использовать для отмены дальнейшего выполнения.

Синтаксис для отмены:

```
let timerId = setTimeout(...);
clearTimeout(timerId);
```

# setInterval

Метод setInterval имеет такой же синтаксис как setTimeout:

```
let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...)
```

Все аргументы имеют такое же значение.

Но отличие этого метода от setTimeout в том, что функция запускается не один раз, а периодически через указанный интервал времени.

```
// повторить с интервалом 2 секунды
let timerId = setInterval(() => alert('tick'), 2000);
// остановить вывод через 5 секунд
setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);
```

# Рекурсивный setTimeout

Есть два способа запускать что-то регулярно.

Один из них setInterval. Другим является рекурсивный setTimeout. Например:

```
/** вместо:
let timerId = setInterval(() => alert('tick'), 2000);
*/
let timerId = setTimeout(function tick() {
  alert('tick');
  timerId = setTimeout(tick, 2000); // (*)
}, 2000);
```

# Замыкание

Что такое замыкание?

Замыкание это функция у которой есть доступ к своей внешней функции по области видимости, даже после того, как внешняя функция прекратилась.

Замыкание это функция, захватывающая лексическое окружение того контекста, где она создана.

# Что такое лексическая область видимости?

Лексическая область видимости это статическая область в JavaScript, имеющая прямое отношение к доступу к переменным, функциям и объектам, основываясь на их расположении в коде.

Вот пример:

```
let a = 'global';
function outer() {
    let b = 'outer';
function inner() {
      let c = 'inner'
      console.log(c);   // выдаст 'inner'
      console.log(b);   // выдаст 'outer'
      console.log(a);   // выдаст 'global'
    }
    console.log(a);     // выдаст 'global'
    console.log(b);     // выдаст 'outer'
    inner();
  }
outer();
console.log(a);         // выдаст 'global'
```

В общем, цепочка области видимости выше будет такой:

```
Global {
  outer {
    inner
  }
}
```

# Практические примеры замыкания

```
function person() {
  let name = 'Peter';
  
  return function displayName() {
    console.log(name);
  };
}
let peter = person();
peter(); // выведет 'Peter'
```

```
function getCounter() {
  let counter = 0;
  return function() {
    return counter++;
  }
}
let count = getCounter();
console.log(count());  // 0
console.log(count());  // 1
console.log(count());  // 2
```

# Как работают замыкания?

Чтобы реально это понять, нам надо разобраться в двумя самыми важными концепциями в JavaScript, а именно,

1) Контекст выполнения

2) Лексическое окружение.

# Контекст выполнения

Это абстрактная среда, в которой JavaScript код оценивается и выполняется.

Когда выполняется “глобальный” код, он выполняется внутри глобального контекста выполнения, а код функции выполняется внутри контекста выполнения функции.

Тут может быть только один запущенный контекст выполнения (JavaScript это однопоточный язык), который управляется стеком запросов.

Стек выполнения это стек с принципом LIFO (Последний вошёл, первый вышел), в котором элементы могут быть добавлены или удалены только сверху стека.

Давайте посмотрим на пример кода, чтобы лучше понять контекст выполнения и стек:


![help](https://miro.medium.com/max/700/1*huMb5-_MmM8zkFVnchsjbg.png)


Во время выполнения этого кода, движок JavaScript создаёт глобальный контекст вызова, для того, чтобы выполнить глобальный код и когда он доходит до вызова функции first(), он создаёт новый контекст выполнения для этой функции и ставит её на вершину стека вызовов.

Так что он будет выглядеть таким образом для кода выше:


![help](https://miro.medium.com/max/700/1*sOyjVHh8h49PThAVs7PS6w.png)

У лексического окружения есть два компонента:

(1) запись в окружении

(2) отсылка к внешнему окружению.

1) Запись в окружении(environment record) это место хранятся объявления переменной или функции.

2) Отсылка к внешнему окружению (reference to the outer environment) означает то, что у него есть доступ к внешнему (родительскому) лексическому окружению.

Этот компонент самый важный для понимания того, как работают замыкания.

```
lexicalEnvironment = {
  environmentRecord: {
    <identifier> : <value>,
    <identifier> : <value>
  }
  outer: < Reference to the parent lexical environment>
}
```

Пример:

```
let a = 'Hello World!';
function first() {
  let b = 25;  
  console.log('Inside first function');
}
first();
console.log('Inside global execution context');
```

```
globalLexicalEnvironment = {
  environmentRecord: {
      a     : 'Hello World!',
      first : < reference to function object >
  }
  outer: null
}
```

**Обратите внимание — когда функция выполняется, её контекст выполнения удаляется из стека, но её лексическое окружение может или не может быть удалено из памяти, в зависимости от того, ссылается ли на это лексическое окружение другое лексическое окружение.**


# Рекурсия

Рекурсия – это когда функция в своём теле вызывает саму себя.

Функцию, которая вызывает сама себя, называют рекурсивной функцией.

Вызов рекурсивной функции, называется рекурсивным вызовом.

В качестве примера, вычислим факториал с использованием рекурсии:

```
function f(n) {
  if (n === 1) return 1;
  return n * f(n - 1);
}
alert(f(4));
```

Визуально последовательное выполнение данной функции можно представить так:

![help](https://puzzleweb.ru/javascript/recursiya.png)

Выполнение программы многократно спускается вниз, пока не упрётся в условие выхода из рекурсии.

Достигнув конца, она идёт обратно, возвращая результаты сделанных вызовов.

Рекурсивная функция обязательно должна иметь условие завершения, если его не указать, функция будет вызываться до тех пор, пока не будет достигнута максимальная глубина рекурсии, затем будет сгенерировано исключение.

Любую рекурсию можно заменить циклом. Перепишем вычисление факториала с помощью цикла:

```
let result = 1;
for (let i = 2; i <= 4; i++) {
  result *= i;
}
console.log(result);   // 24
```

Еще примеры:

Как можно найти сумму

```
function sum(num) {
    if (num === 0) {
        return 0;
    } else {
        return num + sum(--num)
    }
}
const res = sum(3);
console.log(res); // 6
```

# Еще пример

Напишем функцию pow(x, n), которая возводит x в натуральную степень n. Иначе говоря, умножает x на само себя n раз.

```
function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}
alert( pow(2, 3) ); // 8
```

# Измерение производительности JavaScript-функций

Измерение времени, которое уходит на выполнение функции — это хороший способ доказательства того, что одна реализация некоего механизма является более производительной, чем другая.

Это позволяет удостовериться в том, что производительность функции не пострадала после неких изменений, внесённых в код.

# Метод performance.now()

Интерфейс Performance даёт доступ к значению типа DOMHighResTimeStamp через метод performance.now().

Этот метод возвращает временную метку, указывающую на время в миллисекундах, прошедшее с момента начала существования документа.

Причём, точность этого показателя составляет порядка 5 микросекунд (доли миллисекунды).

Для того чтобы измерить производительность фрагмента кода, пользуясь методом performance.now(), нужно выполнить два измерения времени, сохранить результаты этих измерений в переменных, а затем вычесть из результатов второго измерения результаты первого:

```
const t0 = performance.now();
for (let i = 0; i < array.length; i++) 
{
  // какой-то код
}
const t1 = performance.now();
console.log(t1 - t0, 'milliseconds');
```

В Chrome после выполнения этого кода можно получить примерно такой результат:

```
0.6350000001020817 "milliseconds"
```

В Firefox — такой:

```
1 milliseconds
```

Как видно, результаты измерений, полученные в разных браузерах, серьёзно различаются.

Дело в том, что в Firefox 60 точность результатов, возвращаемых API Performance, снижена.

# Метод console.time()

Измерение времени с использованием этого API производится крайне просто.

Достаточно, перед кодом, производительность которого нужно оценить, вызвать метод console.time(), а после этого кода — метод console.timeEnd().

```
console.time('test');
for (let i = 0; i < array.length; i++) {
  // какой-то код
}
console.timeEnd('test');
```

После выполнения подобного кода система автоматически выведет в консоль сведения о прошедшем времени.

В Chrome это будет выглядеть примерно так:

```
test: 0.766845703125ms
```

В Firefox — так:

```
test: 2ms - timer ended
```

# Формат JSON, метод toJSON

Допустим, у нас есть сложный объект, и мы хотели бы преобразовать его в строку, чтобы отправить по сети или просто вывести для логирования.

Естественно, такая строка должна включать в себя все важные свойства.

Мы могли бы реализовать преобразование следующим образом:

```
let user = {
  name: "John",
  age: 30,
  toString() {
    return `{name: "${this.name}", age: ${this.age}}`;
  }
};
alert(user); // {name: "John", age: 30}
```

Но в процессе разработки добавляются новые свойства, старые свойства переименовываются и удаляются.

# JSON.stringify

JSON (JavaScript Object Notation) – это общий формат для представления значений и объектов

JavaScript предоставляет методы:

- JSON.stringify для преобразования объектов в JSON.

- JSON.parse для преобразования JSON обратно в объект.

Например, здесь мы преобразуем через JSON.stringify данные студента:

```
let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  wife: null
};
let json = JSON.stringify(student);
alert(typeof json); // мы получили строку!
alert(json);
/* выведет объект в формате JSON:
{
  "name": "John",
  "age": 30,
  "isAdmin": false,
  "courses": ["html", "css", "js"],
  "wife": null
}
*/
```