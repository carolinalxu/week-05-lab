import React, { useState } from "react";
import Todos from "./components/Playlist";
import { TodoContext } from "./data/ToDoContext";
import "./styles.css";
import TodoForm from "./components/TaskForm";

export default function App() {
  const [editing, setEditing] = useState(null);

  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    const updatedTask = [...tasks, task];
    setTasks(updatedTask);
    setEditing(null);
  }

  function removeTask(task) {
    const updatedTask = tasks.filter(function (list) {
      return list.id !== task.id;
    });
    setTasks(updatedTask);
    setEditing(null);
  }

  function updateTask(task, editedText) {
    // Implement the editing logic here
    const updatedTasks = tasks.map((t) =>
      t.id === task.id ? { ...t, title: editedText } : t
    );
    setTasks(updatedTasks);
    setEditing(null);
  }

  return (
    <div className="App">
      <TodoContext.Provider
        value={{
          tasks,
          setTasks,
          updateTask,
          addTask,
          removeTask,
          setEditing,
          editing
        }}
      >
        <h1>Task Management App</h1>
        {!editing ? (
          <>
            <Todos />
            <button className="add" onClick={() => setEditing("new")}>
              Add Task
            </button>
          </>
        ) : (
          <>
            <TodoForm />
          </>
        )}
      </TodoContext.Provider>
    </div>
  );
}
