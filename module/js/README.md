<h1>How to do it</h1>
Как запустить сервер

1. Установить на Ваше устройство [node js](https://nodejs.org/uk/download/).

2. Открыть консоль\терминал.

3. Перейти по папкам в папку `server`

4. Ввести команду `npm install`.

5. Ввести команду `npm start`.

6. После этого Вы должны увидеть в консоле сообщение:

```
Listening on port 8080
```

Поздравляю, Вы запустили сервер)

Так же, зайдя на http://localhost:8080

Вы должны увидеть следующий контент

```
{ msg: "Hi to my first server" }
```

После первого запуска, для старта сервера вам будет необходимо выполнить пункт 3 и пункт 5

Остальные пункты при втором и тд запусках нужно пропускать.

Endpoits:
```
PATCH:'http://localhost:8080/todo/{id}'
```
```
DELETE:http://localhost:8080/todo/{id}'
```
```
POST:'http://localhost:8080/todo'
```
где id - это id соответствующего ToDo Item'a

`+` баллы за то, что инпут-чекбокс будет высылать PATCH запрос на сервер,
для изменения состояния TODO