import { v4 as uuidv4 } from "uuid";
import { checkToken } from "./checkToken";

export const getActiveTodos = async (token) => {
  const isAuthencitaed = await checkToken(token);
  if (isAuthencitaed) {
    const allTodos = JSON.parse(localStorage.getItem("todos")) || [];
    const groups = JSON.parse(localStorage.getItem("groups")) || [];
    const todoById = allTodos.filter(
      (todo) => todo.createdBy === isAuthencitaed.id && todo.status === "active"
    );
    const todoWithGroup = todoById.map((todo) => {
      const group = groups.find((group) => group.id === todo.group);
      return { ...todo, group: group.name };
    });
    return todoWithGroup;
  }
};

export const createTodo = async (token, newTodo) => {
  const { title, description, group } = newTodo;
  let success = false;
  const isAuthencitaed = await checkToken(token);
  if (isAuthencitaed) {
    if (title && description && group) {
      const allTodos = JSON.parse(localStorage.getItem("todos")) || [];
      const allGroups = JSON.parse(localStorage.getItem("groups"));
      const index = allGroups.findIndex((elem) => elem.id === group);
      const id = uuidv4();
      allGroups[index].todos.push(id);
      localStorage.setItem("groups", JSON.stringify(allGroups));
      allTodos.push({
        title,
        description,
        status: "active",
        group,
        id,
        createdBy: isAuthencitaed.id,
      });
      localStorage.setItem("todos", JSON.stringify(allTodos));
      success = true;
      const todoWithGroup = allTodos.map((todo) => {
        const group = allGroups.find((group) => group.id === todo.group);
        return { ...todo, group: group.name };
      });
      return { data: todoWithGroup[todoWithGroup.length - 1], success };
    } else {
      throw Error("All Fields Are Required");
    }
  } else {
    throw Error("Not authorized");
  }
};
