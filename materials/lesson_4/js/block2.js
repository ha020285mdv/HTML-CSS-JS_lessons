// Глобальные объекты
// var foo = 42;
// console.log(window.foo); // 42
// console.log(global); // for Node js

// let bar = "top kek";
// console.log(window.bar); // undefined

// window.baz = "JavaScript <3";
// console.log(baz); // JavaScript <3

// Нативные объекты

// console.log(Object, Array, Date, Math);
// console.log(Date.now());

// console.log(history);

// const obj = {
//   a: 2,
//   b: 3,
// };

//Protos

// const animal = {
//   eats: true,
// };

// const rabbit = {
//   jumps: true,
// };

// const lions = {
//   roar: true,
// };

// rabbit.__proto__ = animal;
// lions.__proto__ = animal;

// console.log(rabbit.jumps);
// console.log(rabbit.eats);
// console.log(rabbit);
// true
// rabbit.eats; // true

// const animal = {
//   eats: true,
//   walk() {
//     return "Walk";
//     // console.log("Walk");
//   },
// };
// const rabbit = {
//   jumps: true,
// };
// const lions = {
//   roar: true,
// };

// rabbit.__proto__ = animal;

// lions.__proto__ = animal;
// console.log(rabbit.walk());
// console.log(rabbit.eats); // Walk // true

// let animal = {
//   eats: true,
//   walk() {
//     alert("Animal walk");
//   },
// };
// let rabbit = {
//   jumps: true,
//   __proto__: animal,
// };
// // walk взят из прототипа
// rabbit.walk(); // Animal walk

// rabbit.walk = () => {
//   console.log("Rabbit walk");
// };

// rabbit.walk();
// console.log(rabbit.eat());

// This

// методы animal
// let animal = {
//   walk() {
//       if (!this.isSleeping) {
//           alert(`I walk`);
//       }
//   },
//   sleep() {
//       this.isSleeping = true;
//   }
// };

// let rabbit = {
//   name: "White Rabbit",
//   __proto__: animal
// };

// модифицирует rabbit.isSleeping
// rabbit.sleep();
// alert(rabbit.isSleeping); // true
// alert(animal.isSleeping); // undefined (нет такого свойства в прототипе)

// Object

// assign

// const obj = {
//   a: 1,
//   arr: [1, 2, 3],
//   complicated: {
//     x: 32,
//   },
// };

// const secondObj = { b: 2 };
// const copy = Object.assign({}, obj, secondObj);

// copy.complicated.x = 3;
// copy.arr.push(3, 4, 5);

// console.log(JSON.stringify(obj));
// console.log(JSON.parse('{"a":1,"arr":[1,2,3,3,4,5],"complicated":{"x":3}}'));
// const copyWithoutMutating = JSON.parse(JSON.stringify(obj));

// copyWithoutMutating.arr.push(3, 4, 5);
// const copy
// console.log(obj, copyWithoutMutating); // { a: 1 }

//create

// const human = {
//   test: true,
// };
// const Vova = Object.create(human);
// console.log(Vova);
// const newObj = Object.create({});
// console.log(newObj);

// const withoutProto = Object.create(null);
// console.log(withoutProto);
// Vova.__proto__ === human

//freeze

// const person = {
//   name: "Petya",
// };

// person.age = 5;

// const frozen_person = Object.freeze(person);

// person.male = false;
// frozen_person.test = "123";
// frozen_person.male = true;

// console.log(frozen_person); // {  name: 'Petya', age: 5  }. Свойство test не записалось

//getOwnPropertyNames
const protoObj = {
  test: "test",
};

const object1 = {
  a: 1,
  b: 2,
  c: 3,
  __proto__: protoObj,
};
// console.log(Object.getOwnPropertyNames(object1));
// console.log(object1);
// expected output: Array ["a", "b", "c"]

//keys, values, entries

const person = {
  name: "Petya",
  age: 20,
};
// console.log(Object.keys(person)); //
// console.log(Object.values(person)); // ['Petya', 20]
// console.log(Object.entries(person)); //

// Конструкторы

function Person(name, lastName, age, dream) {
  if (!new.target) {
    alert("Не вызывай эту функцию без new");
  } else {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.dream = dream;
    this.sayHi = function () {
      return "Hi from " + this.name;
    };
  }
}
const firstUser = new Person("Vova", "", "22", "Become a ninja");

// console.log(firstUser.constructor);

// const secondUser = {
//   name: "Tester",
// };

// console.log(firstUser.sayHi());

// console.log(firstUser instanceof Person);
// console.log(secondUser instanceof Person);
// console.log(2 instanceof Array);
// console.log([] instanceof Array);
// firstUser.name; // Vova
// firstUser.nlastNameame; // Testovich
// firstUser.dream; // Become a ninja

// let animal = {
//   eats: true,
// };

// function Rabbit(name) {
//   this.name = name;
// }

// Rabbit.prototype = animal;

// const rabbit = new Rabbit("Кролик");

// console.log(rabbit);

// const user = new Person();

// const secondUser = new Person();

// console.log(user, secondUser);

Array.prototype.print = function () {
  // логнуть массив, перевернув его его, и соединив через тире
  const temp = [...this];
  console.log(temp.reverse().join("-"));
};

const arr = [1, 2, 3, "test"];
console.log(arr);
arr.print();
console.log(arr);
