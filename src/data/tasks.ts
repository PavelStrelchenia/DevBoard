import type { Task } from "../types/task";

const tasks: Task[] = [
    {
        id: "1",
        title: "Make video",
        description: "Short video for instagram",
        status: "toDo",
        priority: "high",
        createdAt: "2026-10-26",
    },
    {
        id: "2",
        title: "Learn React",
        description: "Create pet-project",
        status: "inProgress",
        priority: "medium",
        createdAt: "2026-09-10",
    },
    {
        id: "3",
        title: "Learn JavaScript",
        description: "Learn array",
        status: "done",
        priority: "low",
        createdAt: "2026-07-06",
    },
];

export { tasks };
