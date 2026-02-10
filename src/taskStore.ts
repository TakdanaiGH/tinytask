export interface Task {
  id: number;
  title: string;
  done: boolean;
}

// In-memory store
let tasks: Task[] = [
  { id: 1, title: "Understand CI Stages", done: false },
  { id: 2, title: "Fix the Failing Test", done: false },
  { id: 3, title: "Review the Dockerfile", done: true },
];
let nextId = 4;

export const getTasks = (): Task[] => tasks;

export const addTask = (title: string): Task | null => {
  const trimmed = title.trim();
  if (!trimmed) {
    return null;
  }
  const newTask: Task = {
    id: nextId++,
    title: trimmed,
    done: false,
  };
  tasks.push(newTask);
  return newTask;
};

export const toggleTask = (id: number): Task | null => {
  const task = tasks.find((t) => t.id === id);
  if (task) {
    task.done = !task.done;
    return task;
  }
  return null;
};

// Function to reset tasks, useful for testing
export const resetTasks = () => {
  tasks = [
    { id: 1, title: "Understand CI Stages", done: false },
    { id: 2, title: "Fix the Failing Test", done: false },
    { id: 3, title: "Review the Dockerfile", done: true },
  ];
  nextId = 4;
};
