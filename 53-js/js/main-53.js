// Задание 1.
// Дан массив пользователей:
const users = [
  { name: "Alex", age: 24, isAdmin: false },
  { name: "Bob", age: 13, isAdmin: false },
  { name: "John", age: 31, isAdmin: true },
  { name: "Jane", age: 20, isAdmin: true },
];
// Добавьте в конец массива двух пользователей:
// { name: 'Ann', age: 19, isAdmin: false },
// { name: 'Jack', age: 43, isAdmin: true }

users.push(
  { name: "Ann", age: 19, isAdmin: false },
  { name: "Jack", age: 43, isAdmin: true }
);

// Задание 2.
// Используя массив пользователей users из предыдущего задания, напишите функцию getUserAverageAge(users), которая возвращает средний возраст пользователей.

function getUserAverageAge(users) {
  let sumAge = 0;
  let averageAge = 0;
  for (let i = 0; i < users.length; i++) {
    sumAge += users[i].age;
  }
  return (averageAge = sumAge / users.length);
}

console.log(getUserAverageAge(users));

// Задание 3.
// Используя массив пользователей users из предыдущего задания, напишите функцию getAllAdmins(users), которая возвращает массив всех администраторов.

const getAllAdmins = (users) => {
  let admins = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin == true) {
      admins.push(users[i]);
    }
  }
  return admins;
};

const admins = getAllAdmins(users);
console.log(admins);

// Задание 4.
// Напишите функцию first(arr, n), которая возвращает первые n элементов массива. Если n == 0, возвращается пустой массив [], если n == undefined, то возвращается массив с первым элементом.

let arr = [1, 2, 3, 4, 5];

function first(arr, n) {
  if (n > arr.length) {
    return `${n} не может быть больше длинны массива - ${arr.length}`;
  } else if (n == 0) {
    return arr = [];
  } else if (n == undefined) {
    return arr = [arr[0]];
  } else {
    let newArr = [];
    for(let i = 0; i < n; i++) {
      newArr.push(arr[i]);
    }
    return newArr;
  }
}

console.log(first(arr, 2));
