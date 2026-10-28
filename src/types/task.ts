type Task = {
    id: string;
    title: string;
    description: string;
    status: "toDo" | "inProgress" | "done";
    priority: "low" | "medium" | "high";
    createdAt: string;
};

type NewTask = Omit<Task, "id" | "status" | "createdAt">;

export type TaskFilter = Task["status"] | "all";
export type { Task, NewTask };
