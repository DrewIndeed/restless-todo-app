import { useEffect, useState } from "react";

// import { fetchTodos as fetchRestTodos, addTodo as addRestTodo } from './api/rest';
// import { fetchTodos as fetchGraphQLTodos, addTodo as addGraphQLTodo } from './api/graphql';
// import { fetchTodos as fetchGrpcTodos, addTodo as addGrpcTodo } from './api/grpc'; // Uncomment if gRPC is ready

import "./App.css";
import { Todo } from "./types";

function App() {
  // states
  const [todos] = useState<Todo[]>([
    { id: "default", text: "default", completed: false },
  ]);
  const [newTodo, setNewTodo] = useState("");
  const [apiType, setApiType] = useState<"rest" | "grpc" | "graphql">("rest");

  // state to handle theme
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme
      ? (savedTheme as "light" | "dark")
      : window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  // TODO: Fetch todos based on selected API
  useEffect(() => {
    const fetchData = async () => {};
    fetchData();
  }, [apiType]);

  // Apply theme class to body
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  // Handle theme persistence
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  // TODO: Add new todo
  const handleAddTodo = async () => {};

  return (
    <div className={`container ${theme}`}>
      <div className="header">
        <h1>RESTless To-Do App</h1>
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="theme-toggle"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>

      <p>
        Current API: <strong>{apiType.toUpperCase()}</strong>
      </p>

      <div className="api-selector">
        <button
          onClick={() => setApiType("rest")}
          disabled={apiType === "rest"}
        >
          REST
        </button>
        <button
          onClick={() => setApiType("graphql")}
          disabled={apiType === "graphql"}
        >
          GraphQL
        </button>
        <button
          onClick={() => setApiType("grpc")}
          disabled={apiType === "grpc"}
        >
          gRPC
        </button>
      </div>

      <div className="todo-form">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter a new todo..."
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            <span
              className="check-circle"
              // onClick={() => handleToggleTodo(todo.id)}
            >
              {todo.completed ? "✓" : ""}
            </span>
            <span className="todo-text">{todo.text}</span>
            <button
              className="delete-btn"
              // onClick={() => handleDeleteTodo(todo.id)}
            >
              🗑️
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
