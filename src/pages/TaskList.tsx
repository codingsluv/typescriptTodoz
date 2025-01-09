import { useState } from "react";
import TaskInput from "../component/TaskInput";
import TaskItem from "../component/TaskItem";
import { Task } from "../types/Task";

export default function TaskList() {
    const [task, SetTask] = useState<Task[]>([])
    
    const addTask = (newtask:string) => {
        const newTasks:Task = {
            id:task.length + 1,
            text:newtask,
            completed:false
        }
        SetTask(prevTask => [...prevTask, newTasks])
    }

    const completedTask = (id:number) => {
        SetTask(prevTask => prevTask.map(t => t.id === id ? {...t, completed:!t.completed} : t))
    }

    const deleteTask = (id:number) => {
        SetTask(prevTask => prevTask.filter(t => t.id !== id))
    }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-slate-800 to-purple-900">
      <div className="w-full max-w-md p-6 bg-indigo-500 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-white mb-4">Add Task List</h1>
            <TaskInput addTask = {addTask}/>
            <ul className="space-y-4">
                {
                    task.map((task) => (
                        <TaskItem key={task.id} task = {task} completedTask={completedTask} deleteTask={deleteTask}/>  // Passing the task object as a prop to TaskItem component for better reusability and state management.  // task.id is used as the key for React's keyed lists.  // task.id is used as the key for React's keyed lists.  // task.id is used as the key for React's keyed lists.  // task.id is used as the key for React's keyed lists.  // task.id is used as the key for React's keyed lists.  // task.id is used as the key for React's keyed lists.  // task.id is used as the key for React's keyed lists.  // task.id is used as the key for React's keyed lists.  // task.id is used as the key for React's keyed lists.  // task.id is used as the
                    ))
                }
            </ul>
        </div>
    </div>
  )
}