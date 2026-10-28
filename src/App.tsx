import TaskList from "./components/TaskList";
import "./App.css";
import { useState } from "react";
import type { TaskFilter } from "./types/task";
import type { Task } from "./types/task";
import { tasks as initialTasks } from "./data/tasks";

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
        </main>
    );
}

export default App;
