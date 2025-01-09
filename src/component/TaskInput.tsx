import { ChangeEvent, useState } from "react"

type TaskInputProps = {
    addTask: (text:string) => void
}

export default function TaskInput({addTask}:TaskInputProps) {
    const [newTask, setNewTask] = useState<string>("")

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setNewTask(e.target.value)
    }

    const handleAddTask = () => {
        if (newTask.trim() !== "") {
            addTask(newTask)
            setNewTask("")
        }
    }

  return (
    <div className="mb-4 flex">
      <input onChange={handleChange} value={newTask}
        className="w-full px-4 py-2 border rounded-s-xl focus:outline-none focus:ring-2 focus:ring-purple-900" type="text" name="" id="" />
      <button onClick={handleAddTask} className="ml-2 px-4 py-2 border rounded-s-xl bg-purple-900 text-white hover:bg-purple-800 transition-all duration-300">Add</button>
    </div>
  )
}