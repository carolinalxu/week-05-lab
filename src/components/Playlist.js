import { useContext } from "react";
import Task from "./Task"; // Import Task component
import { TodoContext } from "../data/ToDoContext";

export default function Playlist() {
  const { tasks, removeTask, setTasks } = useContext(TodoContext);

  function toggleClick(task) {
    const updatedTask = tasks.map(function (list) {
      if (list.id === task.id) {
        list.clicked = !list.clicked;
        return list;
      } else {
        return list;
      }
    });
    setTasks(updatedTask);
  }

  return (
    <div className="listContainer">
      <ul className="List">
        {tasks.map((task) => (
          <Task
            key={task.id} // Use task.id instead of tasks.id
            id={task.id}
            task={task}
            remove={removeTask}
            toggleClick={toggleClick}
          />
        ))}
      </ul>
      {/* <TodoForm addTask={addTask} /> */}
    </div>
  );
}
