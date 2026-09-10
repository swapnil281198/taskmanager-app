import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const API = process.env.REACT_APP_API;

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const res = await axios.get(`${API}/api/tasks`);
    setTasks(res.data);
  };

  const addTask = async () => {
    await axios.post(`${API}/api/tasks`, {
      title,
      description
    });

    setTitle("");
    setDescription("");

    loadTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`${API}/api/tasks/${id}`);
    loadTasks();
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>DevOps Task Manager</h1>

      <input
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br />
      <br />

      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <br />
      <br />

      <button onClick={addTask}>
        Add Task
      </button>

      <hr />

      {tasks.map((task) => (
        <div key={task._id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>

          <button onClick={() => deleteTask(task._id)}>
            Delete
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
