import type { Task } from "../types/task";
import "./TaskCard.css";

type TaskCardProps = {
    task: Task;
    onChangeTaskStatus: (taskId: string, newStatus: Task["status"]) => void;
};

const TaskCard = ({ task, onChangeTaskStatus }: TaskCardProps) => {
    const statusClasses: Record<Task["status"], string> = {
        toDo: "to-do",
        inProgress: "in-progress",
        done: "done",
    };
    const priorityClasses: Record<Task["priority"], string> = {
        low: "low",
        medium: "medium",
        high: "high",
    };

    return (
        <div className="task-card">
            <h2 className="task-card__title">{task.title}</h2>
            <p className="task-card__description">{task.description}</p>
            <p
                className={`task-card__status status--${statusClasses[task.status]}`}
            >
                {task.status}
            </p>
            <p
                className={`task-card__priority priority--${priorityClasses[task.priority]}`}
            >
                {task.priority}
            </p>
            <p className="task-card__date">{task.createdAt}</p>
            <button
                onClick={() =>
                    onChangeTaskStatus(
                        task.id,
                        task.status === "toDo"
                            ? "inProgress"
                            : task.status === "inProgress"
                              ? "done"
                              : "toDo",
                    )
                }
            >
                Change status
            </button>
        </div>
    );
};

export default TaskCard;
