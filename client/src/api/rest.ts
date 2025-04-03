import axios from "axios";

export const fetchTodos = async () => {
  const response = await axios.get("/api/todos"); // Uses proxy
  return response.data;
};
