import { useEffect, useState } from "react";

// import { fetchTodos as fetchRestTodos, addTodo as addRestTodo } from './api/rest';
// import { fetchTodos as fetchGraphQLTodos, addTodo as addGraphQLTodo } from './api/graphql';
// import { fetchTodos as fetchGrpcTodos, addTodo as addGrpcTodo } from './api/grpc'; // Uncomment if gRPC is ready

import "./App.css";

function App() {
  const [todos] = useState<{ id: string; text: string }[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const [apiType, setApiType] = useState<"rest" | "grpc" | "graphql">("rest");

  // TODO: Fetch todos based on selected API
  useEffect(() => {
    const fetchData = async () => {};
    fetchData();
  }, [apiType]);

  // TODO: Add new todo
  const handleAddTodo = async () => {};

  return (
    <div className="container">
      <h1>RESTless Todo</h1>
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
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
