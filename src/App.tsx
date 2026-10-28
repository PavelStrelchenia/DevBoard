import TaskList from "./components/TaskList";
import "./App.css";
import { useState } from "react";
import type { NewTask, TaskFilter } from "./types/task";
import type { Task } from "./types/task";
import { tasks as initialTasks } from "./data/tasks";
import TaskForm from "./components/taskForm/TaskForm";

function changeTaskStatus(
    tasks: Task[],
    taskId: string,
    newStatus: Task["status"],
): Task[] {
    const updatedTasks = tasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task,
    );
    return updatedTasks;
}

function App() {
    const [filter, setFilter] = useState<TaskFilter>("all");
    const [tasks, setTasks] = useState<Task[]>(initialTasks);

    function handleChangeTaskStatus(
        taskId: string,
        newStatus: Task["status"],
    ): void {
        setTasks((prevTasks) => changeTaskStatus(prevTasks, taskId, newStatus));
    }

    function handleAddTask(newTask: NewTask) {
        const task: Task = {
            ...newTask,
            id: Date.now().toString(),
            status: "toDo",
            createdAt:
                new Date().getFullYear() +
                "-" +
                String(new Date().getMonth() + 1).padStart(2, "0") +
                "-" +
                String(new Date().getDate()).padStart(2, "0"),
        };
        setTasks((prevTasks) => [...prevTasks, task]);
    }
    return (
        <main>
            <h1>DevBoard</h1>
            <button onClick={() => setFilter("all")}>All</button>
            <button onClick={() => setFilter("toDo")}>To Do</button>
            <button onClick={() => setFilter("inProgress")}>In Progress</button>
            <button onClick={() => setFilter("done")}>Done</button>
            <TaskList
                filter={filter}
                tasks={tasks}
                onChangeTaskStatus={handleChangeTaskStatus}
            />
            <TaskForm onAddTask={handleAddTask} />
        </main>
    );
}

export default App;
