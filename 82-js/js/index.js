"use strict";

// Массив с ключами
const todoKeys = {
  id: "id",
  text: "text",
  is_completed: "is_completed",
};

// Массив для задач
const todos = [];

// Сообщение об ошибке
const errTodoNotFound = (todoId) => `Todo with ID ${todoId} not found`;

// ID задачи
const getNewTodoId = (todos) =>
  todos.reduce((maxId, todo) => Math.max(maxId, todo[todoKeys.id]), 0) + 1;

// Добавление задачи
const createTodo = (todos, text) => {
  const newTodo = {
    [todoKeys.id]: getNewTodoId(todos),
    [todoKeys.text]: text,
    [todoKeys.is_completed]: false,
  };
  todos.push(newTodo);
  return newTodo;
};

// Выполнение задачи
const completeTodoById = (todos, todoId) => {
  const todo = todos.find((todo) => todo[todoKeys.id] === todoId);
  if (!todo) {
    console.error(errTodoNotFound(todoId));
    return null;
  }
  todo[todoKeys.is_completed] = !todo[todoKeys.is_completed];
  return todo;
};

// Удаление задачи
const deleteTodoById = (todos, todoId) => {
  const todoIndex = todos.findIndex((todo) => todo[todoKeys.id] === todoId);
  if (todoIndex === -1) {
    console.error(errTodoNotFound(todoId));
    return todos;
  }
  todos.splice(todoIndex, 1);
  return todos;
};

// Элементы .form, .input и .todos
const formElement = document.querySelector(".form");
const inputElement = document.querySelector(".input");
const todosElement = document.querySelector(".todos");

// Функция createTodoElement(text), которая будет создавать todo в виде разметки
const createTodoElement = (todo) => {
  const todoElement = document.createElement("li");
  todoElement.classList.add("todo");
  todoElement.dataset.id = todo[todoKeys.id];
  todoElement.innerHTML = `<div class="todo-text">${todo[todoKeys.text]}</div>
                      <div class="todo-actions">
                        <button class="button-complete button">&#10004;</button>
                        <button class="button-delete button">&#10006;</button>
                      </div>`;
  return todoElement;
};

// Функция handleCreateTodo(todos, text), которая будет вызывать createTodo и createTodoElement
const handleCreateTodo = (todos, text) => {
  const todo = createTodo(todos, text);
  const todoElement = createTodoElement(todo);
  todosElement.prepend(todoElement);
};

// Слушатель событий на форму
formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const todoText = inputElement.value.trim();
  if (!todoText) return;

  handleCreateTodo(todos, todoText);
  inputElement.value = "";
});

// Слушатель событий на todosElement
todosElement.addEventListener("click", ({ target }) => {
  const todo = target.closest(".todo");
  if (!todo) return;

  const todoId = Number(todo.dataset.id);

  if (target.matches(".button-complete")) {
    completeTodoById(todos, todoId);
    todo.classList.toggle("completed")
  }

  if (target.matches(".button-delete")) {
    deleteTodoById(todos, todoId);
    todo.remove();
  }
});
