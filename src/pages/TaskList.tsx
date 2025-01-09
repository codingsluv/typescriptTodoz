import { useState } from "react";
import TaskInput from "../component/TaskInput";
import TaskItem from "../component/TaskItem";
import { Task } from "../types/Task";

export default function TaskList() {
    const [task, SetTask] = useState<Task[]>([
        {
            id:1,
            text:"Task 1",
            completed:true
        }, 
        {
            id:2,
            text:"Task 2",
            completed:false
        },
        {
            id:3,
            text:"Task 3",
            completed:false
        }
    ])
    
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-slate-800 to-purple-900">
      <div className="w-full max-w-md p-6 bg-indigo-500 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-white mb-4">Task List</h1>
            <TaskInput />
            <ul className="space-y-4">
                {
                    task.map((task) => (
                        <TaskItem key={task.id} task = {task}/>  // Passing the task object as a prop to TaskItem component for better reusability and state management.  // task.id is used as the key for React's keyed lists.  // task.id is used as the key for React's keyed lists.  // task.id is used as the key for React's keyed lists.  // task.id is used as the key for React's keyed lists.  // task.id is used as the key for React's keyed lists.  // task.id is used as the key for React's keyed lists.  // task.id is used as the key for React's keyed lists.  // task.id is used as the key for React's keyed lists.  // task.id is used as the key for React's keyed lists.  // task.id is used as the
                    ))
                }
            </ul>
        </div>
    </div>
  )
}