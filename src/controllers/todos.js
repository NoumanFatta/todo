import * as jose from "jose";

const checkToken = async (token) => {
  const secret = new TextEncoder().encode("NoumanAminFatta");
  const { payload } = await jose.jwtVerify(token, secret);
  if (payload.id) return payload;
  return false;
};

export const getActiveTodos = async (token) => {
  const isAuthencitaed = await checkToken(token);
  if (isAuthencitaed) {
    const allTodos = JSON.parse(localStorage.getItem("todos"));
    if (allTodos?.length) {
      const todoById = allTodos.filter((todo) => todo.createdBy === isAuthencitaed.id && todo.status === "active");
      return todoById;
    }
  }
};
