import { getTodosFromLocaleStorage } from "./storage.js";
import { renderTodos, initTodoHandlers } from "./dom.js";

// Массив для задач
const todos = getTodosFromLocaleStorage() || [];

document.addEventListener("DOMContentLoaded", () => {
  renderTodos(todos);
  initTodoHandlers(todos);
});

