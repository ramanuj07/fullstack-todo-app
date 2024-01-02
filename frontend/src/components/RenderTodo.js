import React, { useState, useEffect } from "react";

const RenderTodo = ({ todos }) => {
  const [updatedTodos, setUpdatedTodos] = useState(todos);

  useEffect(() => {
    setUpdatedTodos(todos);
  }, [todos]);

  const handleMarkComplete = (todoId) => {
    const updatedTodoList = updatedTodos.map((todo) => {
      if (todo._id === todoId) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });

    setUpdatedTodos(updatedTodoList);
  };

  return (
    <div>
      {updatedTodos.map((todo) => {
        return (
          <div key={todo._id}>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button onClick={() => handleMarkComplete(todo._id)}>
              {todo.completed ? "Completed" : "Mark as Complete"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default RenderTodo;
