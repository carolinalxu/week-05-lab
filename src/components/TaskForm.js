import { useContext, useState } from "react";
import { nanoid } from "nanoid";
import { TodoContext } from "../data/ToDoContext";

export default function TaskForm() {
  const {
    tasks,
    addTask,
    removeTask,
    updateTask,
    setEditing,
    editing
  } = useContext(TodoContext);

  let initialData = {
    title: ""
  };

  if (editing !== "new") {
    initialData = tasks.find(function (p) {
      return p.id === editing;
    });
  }

  const [task, setTask] = useState(initialData);

  function handleSubmit(e) {
    e.preventDefault();

    if (editing === "new") {
      addTask({ ...task, id: nanoid() });
    } else {
      updateTask(task);
    }
  }

  function handleTitleChange(e) {
    setTask({ ...task, title: e.target.value });
  }

  return (
    <div className="edit">
      <form onSubmit={handleSubmit}>
        <div className="newTask">
          <label>
            <input
              type="text"
              onChange={handleTitleChange}
              placeholder="Add new task..."
              value={task.title}
            />
          </label>
          <button>Add</button>
        </div>
      </form>
    </div>
  );
}
