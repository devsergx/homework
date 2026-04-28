import { todoKeys } from "./constants.js";
import { createTodo, completeTodoById, deleteTodoById } from "./service.js";
import { setTodosToLocaleStorage } from "./storage.js";

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

export const renderTodos = (todos) => {
  todosElement.innerHTML = "";
  todos.forEach((todo) => {
    const todoElement = createTodoElement(todo);
    if (todo[todoKeys.is_completed]) {
      todoElement.classList.add("completed");
    }
    todosElement.prepend(todoElement);
  });
};

// Функция handleCreateTodo(todos, text), которая будет вызывать createTodo и createTodoElement
const handleCreateTodo = (todos, text) => {
  const todo = createTodo(todos, text);
  const todoElement = createTodoElement(todo);
  setTodosToLocaleStorage(todos);
  todosElement.prepend(todoElement);
};

export const initTodoHandlers = (todos) => {
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
      setTodosToLocaleStorage(todos);
      todo.classList.toggle("completed");
    }

    if (target.matches(".button-delete")) {
      deleteTodoById(todos, todoId);
      setTodosToLocaleStorage(todos);
      todo.remove();
    }
  });
};
