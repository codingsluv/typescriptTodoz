import React from "react";

type Task = {
  id: number;
  title: string;
  completed: boolean;
}

export default function TaskList({ tasks }: { tasks: Task[] }) {
    const [newTask, setNewTask] = React.useState("");
    const [tasksList, setTasksList] = React.useState<Task[]>(tasks);

    const handleAddTask = () => {
      const newTaskId = tasksList.length + 1;
      setTasksList([...tasksList, { id: newTaskId, title: newTask, completed: false }]);
      setNewTask("");
      console.log(tasksList);
    }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-slate-800 to-purple-900">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-slate-900">Task List</h1>
        <div className="mt-6 flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-2">
            <label htmlFor="task" className="text-slate-900 font-medium">
              Add Your Task
            </label>
            <input type="text" id="task" className="w-full rounded-md border-2 border-slate-300 p-2 text-slate-900" />
          </div>
          <button onClick={handleAddTask} className="bg-slate-900 text-white rounded-md p-2 font-medium">Add Task</button>
        </div>
      </div>
    </div>
  )
}