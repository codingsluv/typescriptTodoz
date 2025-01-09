import TaskInput from "../component/TaskInput";
import TaskItem from "../component/TaskItem";


export default function TaskList() {
    
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-slate-800 to-purple-900">
      <div className="w-full max-w-md p-6 bg-indigo-500 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-white mb-4">Task List</h1>
            <TaskInput />
            <ul className="space-y-4">
                <TaskItem />
            </ul>
        </div>
    </div>
  )
}