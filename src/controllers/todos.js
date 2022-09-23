import { v4 as uuidv4 } from "uuid";
import { checkToken } from "./checkToken";

export const getActiveTodos = async (token) => {
  const isAuthencitaed = await checkToken(token);
  if (isAuthencitaed) {
    const allTodos = JSON.parse(localStorage.getItem("todos"));
    if (allTodos?.length) {
      const todoById = allTodos.filter(
        (todo) =>
          todo.createdBy === isAuthencitaed.id && todo.status === "active"
      );
      return todoById;
    }
    return []
  }
};

export const createTodo = async (token, newTodo) => {
  const { title, description } = newTodo;
  const isAuthencitaed = await checkToken(token);
  if (isAuthencitaed) {
    const allTodos = JSON.parse(localStorage.getItem("todos")) || [];
    const id = uuidv4();
    allTodos.push({
      title,
      description,
      status: "active",
      id,
      createdBy: isAuthencitaed.id,
    });
  }
};
