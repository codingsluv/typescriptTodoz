import TaskList from "./pages/TaskList";

export default function App() {
  return (
    <div>
      <TaskList tasks={[
        { id: 1, title: "Task 1", completed: false },
        { id: 2, title: "Task 2", completed: true },
      ]} />
    </div>
  )
}