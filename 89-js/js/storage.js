// Функция для сохранения данных в localstorage
export const setTodosToLocaleStorage = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

// Функция для сборки данных из localstorage
export const getTodosFromLocaleStorage = () => {
  return JSON.parse(localStorage.getItem("todos"));
};