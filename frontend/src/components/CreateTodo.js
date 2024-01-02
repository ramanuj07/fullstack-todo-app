import { useState } from "react";

const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    fetch("http://localhost:3000/todo", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        description: description,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("Failed to add todo");
        }

        const json = await response.json();
        alert("Todo Added successfully");
      })
      .catch((error) => {
        console.error("Error adding todo:", error.message);
        alert("Failed to add todo");
      });
  };

  return (
    <div className="form--container">
      <form action="" className="form--todo" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter the Title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter the Description"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit" id="todo--button">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default CreateTodo;
