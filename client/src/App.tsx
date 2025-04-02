import { useEffect, useRef, useState } from "react";

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

  // state to edit an input
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState("");
  const editInputRef = useRef<HTMLInputElement>(null);

  // Focus edit input when editing
  useEffect(() => {
    if (editingId && editInputRef.current) {
      editInputRef.current.focus();
    }
  }, [editingId]);

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

  const startEditing = (todo: Todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  const saveEdit = async (id: string) => {
    // TODO: use ID
    if (!editText.trim()) return;
    // const updatedTodo = await updateTodo(id, editText);
    // setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
    setEditingId(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent, id: string) => {
    // TODO: use ID
    if (e.key === "Enter") saveEdit(id); // TODO: use ID
    if (e.key === "Escape") setEditingId(null);
  };

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

            {editingId === todo.id ? (
              <input
                ref={editInputRef}
                className="edit-input"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onBlur={() => saveEdit(todo.id)}
                onKeyDown={(e) => handleKeyDown(e, todo.id)}
              />
            ) : (
              <span
                className="todo-text"
                onDoubleClick={() => startEditing(todo)}
              >
                {todo.text}
              </span>
            )}

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
