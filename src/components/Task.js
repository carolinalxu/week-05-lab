import React, { useContext, useState } from "react";
import { TodoContext } from "../data/ToDoContext";

export default function Todo(props) {
  const { setEditing, updateTask } = useContext(TodoContext);
  const task = props.task;
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task.title);

  function handleDelete() {
    props.remove(task);
  }

  function handleEdit() {
    setIsEditing(true);
  }

  function handleStatusChange() {
    props.toggleClick(task);
  }

  function handleSave() {
    if (editedTask.trim() !== "") {
      updateTask(task, editedTask);
    }
    setIsEditing(false);
  }

  return (
    <div className="singleTask">
      <div className="todoDetails">
        {isEditing ? (
          <div>
            <input
              type="text"
              value={editedTask}
              onChange={(e) => setEditedTask(e.target.value)}
            />
            <button onClick={handleSave}>Save</button>
          </div>
        ) : (
          <>
            <input
              type="checkbox"
              onChange={handleStatusChange}
              checked={task.clicked}
            />
            <span className={`title ${task.clicked ? "completed" : ""}`}>
              {task.title}
            </span>
          </>
        )}
      </div>
      <div className="buttons">
        <div onClick={handleEdit} className="actionButton edit-btn">
          Edit
        </div>
        <div onClick={handleDelete} className="actionButton remove-btn">
          Remove
        </div>
      </div>
    </div>
  );
}
