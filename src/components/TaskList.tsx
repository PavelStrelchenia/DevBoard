import TaskCard from "./TaskCard";
import "./TaskList.css";
import type { TaskFilter } from "../types/task";
import type { Task } from "../types/task";

type TaskListProps = {
    filter: TaskFilter;
    tasks: Task[];
    onChangeTaskStatus: (taskId: string, newStatus: Task["status"]) => void;
};

const TaskList = ({ filter, tasks, onChangeTaskStatus }: TaskListProps) => {
    const filteredTasks =
        filter === "all"
            ? tasks
            : tasks.filter((task) => task.status === filter);

    return (
        <div className="task-list">
            {filteredTasks.map((task) => (
                <TaskCard
                    key={task.id}
                    task={task}
                    onChangeTaskStatus={onChangeTaskStatus}
                />
            ))}
        </div>
    );
};

export default TaskList;
