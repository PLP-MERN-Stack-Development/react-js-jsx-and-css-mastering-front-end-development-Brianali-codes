// src/components/TaskManager.jsx
import { useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Button from "./button";

export default function TaskManager() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("All");

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask("");
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const filteredTasks = tasks.filter((task) =>
    filter === "All"
      ? true
      : filter === "Active"
      ? !task.completed
      : task.completed
  );

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Task Manager</h2>

      <div className="flex mb-4 gap-2">
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="grow border rounded px-2 py-1"
          placeholder="Enter a task"
        />
        <Button text="Add" onClick={addTask} variant="primary" />
      </div>

      <div className="flex gap-2 mb-4">
        {["All", "Active", "Completed"].map((type) => (
          <Button
            key={type}
            text={type}
            variant={filter === type ? "primary" : "secondary"}
            onClick={() => setFilter(type)}
          />
        ))}
      </div>

      <ul className="space-y-2">
        {filteredTasks.map((task, i) => (
          <li
            key={i}
            className="flex justify-between items-center p-2 border rounded"
          >
            <span
              className={`${
                task.completed ? "line-through text-gray-500" : ""
              }`}
            >
              {task.text}
            </span>
            <div className="flex gap-2">
              <Button
                text={task.completed ? "Undo" : "Done"}
                variant="secondary"
                onClick={() => toggleTask(i)}
              />
              <Button
                text="Delete"
                variant="danger"
                onClick={() => deleteTask(i)}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
