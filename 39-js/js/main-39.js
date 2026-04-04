// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.

const person = {
  firstName: "Sergey",
  lastName: "Ushenin",
  age: 27,
  isStudent: true,
};

// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.

const obj = { name: "Alex", age: 30 };
const emptyObj = {};

function isEmpty(object) {
  for (const _ in object) {
    return false;
  }
  return true;
}

console.log(isEmpty(obj));

// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.

const task = {
  title: "Купить продукты",
  description: "Купить хлеб, яйца, молоко",
  isCompleted: false,
};

const cloneAndModify = (object, modifications) => {
  return { ...object, ...modifications };
};

console.log(cloneAndModify(task, {isCompleted: true}))

// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

const myObject = {
  method1: () => {
    console.log("Метод 1 вызван");
  },
  method2: () => {
    console.log("Метод 2 вызван");
  },
  property: "Это не метод",
};

const callAllMethods = (object) => {
  for (const key in object) {
    if (typeof object[key] === "function") {
      object[key]();
    }
  }
};

callAllMethods(myObject);

