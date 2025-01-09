import { Task } from "../types/Task"

type TaskItemProps = {
    task: Task
    completedTask: (id:number) => void
    deleteTask: (id:number) => void
}

export default function TaskItem({task, completedTask, deleteTask}:TaskItemProps) {
  return (
    <li className={`flex items-center justify-between bg-white rounded-lg shadow-md p-4 ${task.completed ? " bg-gray-400 line-through" : "bg-purple-100"}`}>  
        <span onClick={() => completedTask(task.id)} className={`cursor-pointer ${task.completed ? "hover:text-red-500" : ""}`}>    {task.text}
        </span>
        <button onClick={() => deleteTask(task.id)} className="ml-4 text-gray-500 hover:text-red-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
    </li>
  )
}