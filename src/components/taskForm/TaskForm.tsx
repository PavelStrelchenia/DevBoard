import { useState } from "react";

import "./taskForm.css";
import type { Task, NewTask } from "../../types/task";

type TaskFormProps = {
    onAddTask: (newTask: NewTask) => void;
};

const TaskForm = ({ onAddTask }: TaskFormProps) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState<Task["priority"]>("medium");

    function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();
        if (!title.trim()) {
            return;
        }
        onAddTask({ title: title.trim(), description, priority });
        setTitle("");
        setDescription("");
        setPriority("medium");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />

                <label htmlFor="description">Description</label>
                <textarea
                    name="description"
                    id="description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                ></textarea>

                <select
                    id="priority"
                    name="priority"
                    value={priority}
                    onChange={(event) => {
                        const value = event.target.value;

                        if (
                            value === "low" ||
                            value === "medium" ||
                            value === "high"
                        ) {
                            setPriority(value);
                        }
                    }}
                >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>

                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default TaskForm;
