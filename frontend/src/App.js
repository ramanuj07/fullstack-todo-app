import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import CreateTodo from "./components/CreateTodo";
import RenderTodo from "./components/RenderTodo";

const AppLayout = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await fetch("http://localhost:3000/todos");
    const todosJSON = await response.json();

    setTodos(todosJSON.todos);
  };

  return (
    <div className="app">
      <h1 className="app--heading">Todo Application by Ramanuj Jindal</h1>
      <CreateTodo />
      <RenderTodo todos={todos} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<AppLayout />);
