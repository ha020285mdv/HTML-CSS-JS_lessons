# Навигация по DOM-элементам

# Дети: childNodes, firstChild, lastChild

- Дочерние узлы (или дети) – элементы, которые являются непосредственными детьми узла.

Другими словами, элементы, которые лежат непосредственно внутри данного.

Например, `<head>` и `<body>` являются детьми элемента `<html>`.

- Потомки – все элементы, которые лежат внутри данного, включая детей, их детей и т.д.

В примере ниже детьми тега `<body>` являются теги `<div>` и `<ul>` (и несколько пустых текстовых узлов):

```
<html>
<body>
  <div>Начало</div>
  <ul>
    <li>
      <b>Информация</b>
    </li>
  </ul>
</body>
</html>
```
А потомки `<body>` – это и прямые дети `<div>`, `<ul>` и вложенные в них: `<li>` (потомок `<ul>`) и `<b>` (потомок `<li>`) – в общем, все элементы поддерева.

# childNodes

Коллекция childNodes содержит список всех детей, включая текстовые узлы.

Пример ниже последовательно выведет детей document.body:

```
<html>
<body>
  <div>Начало</div>
  <ul>
    <li>Информация</li>
  </ul>
  <div>Конец</div>
  <script>
    for (let i = 0; i < document.body.childNodes.length; i++) {
      alert( document.body.childNodes[i] ); // Text, DIV, Text, UL, ..., SCRIPT
    }
  </script>
  ...какой-то HTML-код...
</body>
</html>
```

Свойства **firstChild** и **lastChild** обеспечивают быстрый доступ к первому и последнему дочернему элементу.

Они, по сути, являются всего лишь сокращениями. Если у тега есть дочерние узлы, условие ниже всегда верно:

```
elem.childNodes[0] === elem.firstChild
elem.childNodes[elem.childNodes.length - 1] === elem.lastChild
```

# DOM-коллекции – только для чтения

DOM-коллекции, и даже более – все навигационные свойства, перечисленные в этой главе, доступны только для чтения.

Мы не можем заменить один дочерний узел на другой, просто написав childNodes[i] = ....

# DOM-коллекции живые

Почти все DOM-коллекции, за небольшим исключением, живые. Другими словами, они отражают текущее состояние DOM.

Если мы сохраним ссылку на elem.childNodes и добавим/удалим узлы в DOM, то они появятся в сохранённой коллекции автоматически.

# Соседи и родитель

Соседи – это узлы, у которых один и тот же родитель.

Следующий узел того же родителя (следующий сосед) – **в свойстве nextSibling**, **а предыдущий – в previousSibling**.

Родитель доступен через parentNode.

```
// родителем <body> является <html>
alert( document.body.parentNode === document.documentElement ); // выведет true
// после <head> идёт <body>
alert( document.head.nextSibling ); // HTMLBodyElement
// перед <body> находится <head>
alert( document.body.previousSibling ); // HTMLHeadElement
```

# Навигация только по элементам

- children – коллекция детей, которые являются элементами.

- firstElementChild, lastElementChild – первый и последний дочерний элемент.

- previousElementSibling, nextElementSibling – соседи-элементы.

- parentElement – родитель-элемент.


# Promise. Понимание промисов

Промис - это объект, у которого есть 3 состояния:

- Panding - ожидание

- Resolve - выполнено успешно

- Reject - выполнено с ошибкой

```
let promise = new Promise(function(resolve, reject) {
  // функция-исполнитель (executor)
  // "певец"
});
```

Функция, переданная в конструкцию new Promise, **называется исполнитель (executor)**.

Когда Promise создаётся, она запускается автоматически.

Она должна содержать «создающий» код, который когда-нибудь создаст результат.

Её аргументы resolve и reject – это колбэки, которые предоставляет сам JavaScript

Когда он получает результат, сейчас или позже – не важно, он должен вызвать один из этих колбэков:

- resolve(value) — если работа завершилась успешно, с результатом value.

- reject(error) — если произошла ошибка, error – объект ошибки.

Итак, исполнитель запускается автоматически, он должен выполнить работу, а затем вызвать resolve или reject.

Ниже пример конструктора Promise и простого исполнителя с кодом, дающим результат с задержкой (через setTimeout):

```
let promise = new Promise(function(resolve, reject) {
  // эта функция выполнится автоматически, при вызове new Promise
  // через 1 секунду сигнализировать, что задача выполнена с результатом "done"
  setTimeout(() => resolve("done"), 1000);
});
```

Мы можем наблюдать две вещи, запустив код выше:

- Функция-исполнитель запускается сразу же при вызове new Promise.

- Исполнитель получает два аргумента: resolve и reject — это функции, встроенные в JavaScript, поэтому нам не нужно их писать. Нам нужно лишь позаботиться, чтобы исполнитель вызвал одну из них по готовности.

Спустя одну секунду «обработки» исполнитель вызовет resolve("done"), чтобы передать результат:


![help](https://learn.javascript.ru/article/promise-basics/promise-resolve-1.svg)

А теперь пример, в котором исполнитель сообщит, что задача выполнена с ошибкой:

```
let promise = new Promise(function(resolve, reject) {
  // спустя одну секунду будет сообщено, что задача выполнена с ошибкой
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});
```

![help](https://learn.javascript.ru/article/promise-basics/promise-reject-1.svg)




# Может быть что-то одно: либо результат, либо ошибка

```
let promise = new Promise(function(resolve, reject) {
  resolve("done");
  reject(new Error("…")); // игнорируется
  setTimeout(() => resolve("…")); // игнорируется
});
```

# Потребители: then, catch, finally

Объект Promise служит связующим звеном между исполнителем и функциями-потребителями

- then

Наиболее важный и фундаментальный метод – .then.

Синтаксис:

```
promise.then(
  function(result) { /* обработает успешное выполнение */ },
  function(error) { /* обработает ошибку */ }
);
```

Первый аргумент метода .then – функция, которая выполняется, когда промис переходит в состояние «выполнен успешно», и получает результат.

Второй аргумент .then – функция, которая выполняется, когда промис переходит в состояние «выполнен с ошибкой», и получает ошибку.

Например, вот реакция на успешно выполненный промис:

```
let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("done!"), 1000);
});
// resolve запустит первую функцию, переданную в .then
promise.then(
  result => alert(result), // выведет "done!" через одну секунду
  error => alert(error) // не будет запущена
);
```

Выполнилась первая функция.

А в случае ошибки в промисе – выполнится вторая:

```
let promise = new Promise(function(resolve, reject) {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});
// reject запустит вторую функцию, переданную в .then
promise.then(
  result => alert(result), // не будет запущена
  error => alert(error) // выведет "Error: Whoops!" спустя одну секунду
);
```

- catch

Если мы хотели бы только обработать ошибку, то можно использовать null в качестве первого аргумента: .then(null, errorHandlingFunction).

Или можно воспользоваться методом .catch(errorHandlingFunction), который сделает тоже самое:

```
let promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Ошибка!")), 1000);
});
// .catch(f) это тоже самое, что promise.then(null, f)
promise.catch(alert); // выведет "Error: Ошибка!" спустя одну секунду
```

Вызов .catch(f) – это сокращённый, «укороченный» вариант .then(null, f).

Вызов .finally(f) похож на .then(f, f), в том смысле, что f выполнится в любом случае, когда промис завершится: успешно или с ошибкой.

finally хорошо подходит для очистки, например остановки индикатора загрузки, его ведь нужно остановить вне зависимости от результата.

Например:

```
new Promise((resolve, reject) => {
  /* сделать что-то, что займёт время, и после вызвать resolve/reject */
})
  // выполнится, когда промис завершится, независимо от того, успешно или нет
  .finally(() => остановить индикатор загрузки)
  .then(result => показать результат, err => показать ошибку)
```

# Разница между finall и then

- Обработчик, вызываемый из finally, не имеет аргументов. В finally мы не знаем, как был завершён промис. И это нормально, потому что обычно наша задача – выполнить «общие» завершающие процедуры.

- Обработчик finally «пропускает» результат или ошибку дальше, к последующим обработчикам.

Например, здесь результат проходит через finally к then:

```
new Promise((resolve, reject) => {
  setTimeout(() => resolve("result"), 2000)
})
  .finally(() => alert("Промис завершён"))
  .then(result => alert(result)); // <-- .then обработает результат
```

А здесь ошибка из промиса проходит через finally к catch:

```
new Promise((resolve, reject) => {
  throw new Error("error");
})
  .finally(() => alert("Промис завершён"))
  .catch(err => alert(err));  // <-- .catch обработает объект ошибки
```

Давайте напишем функция, которая сработает через 2 секунды после нажатия на кнопку.

Эта функция должна получать данные с нашего воображаемого севрера.

На нашем сервере должен быть массив с информацией о нашей группе (firstName, surName, mood, eyeColour)

```
const server = [{...}, {...}, {...}, {....}];
```

Внутри функция должен быть промис, который будет это обрабатывать

```
promise
    .then((data) => console.log(data))
    .catch((error) => consoe.log(error))
```

Реализация это задачи ниже:


```
const btn = document.getElementById('btn');
const server = [{
    name: 'Vlad',
    surName: 'Rusanov',
    eyeColour: 'eyeColour'
}, {
    name: 'Vova',
    surName: 'Test',
    eyeColour: 'eyeColour'
}];
const getDataFromServer = () => {
    return new Promise((resolve, reject) => { // (0)
        setTimeout(() => {
            resolve(server); // успех
            // reject(new Error('500 ServerError')); // не успех
        }, 2000);
    })
}
function asyncAction() {
    const responce = getDataFromServer();
    responce
        .then((data) => {  // (1)
            console.log('data: ', data); // [{ name: 'Vlad', ... }, { name: 'Vova', ... }]
        })
        .catch((err) => { // (2)
            console.log('err: ', err);
        })
}
btn.addEventListener('click', asyncAction)
```

0) У нас есть переменная (server), в которой храниться наш "сервер"

1) У нас есть функция asyncAction, которая является обработчиком для нажатия на кнопку.

Внутри это функции мы получаем данные с "сервера":

```
const responce = getDataFromServer();
```

2) Функция getDataFromServer(). (0)

Эта функция возвращает нам новый промис с каким-то результатом (в нашем случае это успех, понимаем это из-за resolve()).

Внутри промиса, который в getDataFromServer, мы возвращаем успех ( resolve(server) ).

Все, что мы передали в resolve, получим в первом аргументе коллбэк функции в .then (1)

Если бы мы написали не resolve(server), а reject(new Error('500 ServerError')), то мы бы попали в обработчик .catch(). (2)

И наше сообщение (500 ServerError) мы можем получить в первом аргументе коллбэк функции .catch


# Заголовки запроса (headers)

Что это?

Это какая-то глвная информация в запросе. С помощью хедеров мы устанавливаем какую-то важную информация для сервера:

- От куда сделан запрос

- Какой тип запроса

- Какие данные передаем

и т.д.


- Content-Type

Заголовок-сущность Content-Type используется для того, чтобы определить MIME тип ресурса.

В ответах сервера заголовок Content-Type сообщает клиенту, какой будет тип передаваемого контента.

В некоторых случаях браузеры пытаются сами определить MIME тип передаваемого контента, но их результат может быть плохой.

Чтобы предотвратить такие ситуации, Вы можете установить в заголовке X-Content-Type-Options значение nosniff.

В запросах (таких, как POST или PUT), клиент сообщает серверу тип отправляемых данных.


# Fetch

Для сетевых запросов из JavaScript есть широко известный термин «AJAX» (аббревиатура от Asynchronous JavaScript And XML).

XML мы использовать не обязаны, просто термин старый, поэтому в нём есть это слово.

Возможно, вы его уже где-то слышали.


Синтаксис метода fetch:

![help](https://miro.medium.com/max/700/1*uAa8kmaMi2cQfMmLndPfeA.png)

- url – URL, на который сделать запрос.

- options – необязательный объект с настройками запроса.


Свойства options:

- method – метод запроса

- headers – заголовки запроса (объект)

- body – тело запроса: FormData, Blob, строка и т.п

- mode – одно из: «same-origin», «no-cors», «cors», указывает, в каком режиме кросс-доменности предполагается делать запрос

- credentials – одно из: «omit», «same-origin», «include», указывает, пересылать ли куки и заголовки авторизации вместе с запросом

- cache – одно из «default», «no-store», «reload», «no-cache», «force-cache», «only-if-cached», указывает, как кешировать запрос

- redirect – можно поставить «follow» для обычного поведения при коде 30x (следовать редиректу) или «error» для интерпретации редиректа как ошибки


Без options это простой GET-запрос, скачивающий содержимое по адресу url.


# Использование

При вызове fetch возвращает промис, который, когда получен ответ, выполняет коллбэки с объектом Response или с ошибкой, если запрос не удался.

Пример использования:

![help](https://miro.medium.com/max/700/1*LSFacSTT8KIQq49fZnZJ6g.png)

Объект response кроме доступа к заголовкам headers, статусу status и некоторым другим полям ответа, даёт возможность прочитать его тело, в желаемом формате.

Варианты описаны в спецификации Body, они включают в себя:

- response.arrayBuffer()

- response.blob()

- response.formData()

- response.json()

- response.text()

# Пример

Наш fetch GET запрос будет выглядеть так:

```
fetch('/api')
    .then((response) => {
            if (response.status !== 200) {
                console.log('Looks like there was a problem');
                console.log(`Status Code: ${response.status}`);
                return;
            }
            return response.json();
        }
    )
    
    .then((data) => {
        console.log('data: ', data)
    })
    
    .catch((err) => {
        console.log('Fetch Error :-S', err);
    });
```


Практика:

Давайте отправим fetch get запрос на сервер с фильмами. И отобразим на страницу картинки фильмов

Сам запрос:

```
fetch('http://api.tvmaze.com/search/shows?q=girls')
```

Теперь надо обработать данные, которые получили с сервера

```
.then((response) => {
            if (response.status !== 200) {
                console.log('Looks like there was a problem');
                console.log(`Status Code: ${response.status}`);
                return;
            }
            return response.json();
        }
    )
    
    .then((data) => {
        // что-то делаем с данными
    })
    
    .catch(function(err) {
        console.log('Fetch Error :-S', err);
    });
```


# Fetch POST запрос

Для отправки POST-запроса или запроса с другим методом, нам необходимо использовать fetch параметры:

- method – HTTP метод, например POST,

- body – тело запроса, одно из списка:

- строка (например, в формате JSON),

- объект FormData для отправки данных как form/multipart,

- Blob/BufferSource для отправки бинарных данных,


Чаще всего используется JSON.

Например, этот код отправляет объект user как JSON:

```
let user = {
  name: 'John',
  surname: 'Smith'
};
let response = await fetch('/article/fetch/post/user', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify(user)
});
let result = await response.json();
alert(result.message);
```

Заметим, что так как тело запроса body – строка, то заголовок Content-Type по умолчанию будет text/plain;charset=UTF-8.

Но, так как мы посылаем JSON, то используем параметр headers для отправки вместо этого application/json, правильный Content-Type для JSON.

# Итого по fetch

Параметры ответа:

- response.status – HTTP-код ответа

- response.ok – true, если статус ответа в диапазоне 200-299

- response.headers – похожий на Map объект с HTTP-заголовками


Методы для получения тела ответа:

- response.text() – возвращает ответ как обычный текст

- response.json() – преобразовывает ответ в JSON-объект

- response.formData() – возвращает ответ как объект FormData (кодировка form/multipart, см. следующую главу)

- response.blob() – возвращает объект как Blob (бинарные данные с типом)

- response.arrayBuffer() – возвращает ответ как ArrayBuffer (низкоуровневые бинарные данные)

```
const resp = fetch('api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(someData),
    });
```

При POST запросе почти всегда надо передать тело запроса (body). В body передаем те данные, которые хотим отправить на сервер.

Отправлять надо в том же формате, который указали в 'Content-Type'. Если там application/json, то нам надо привести body к JSON формату