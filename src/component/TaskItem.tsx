export default function TaskItem() {
    const completed:boolean = true
  return (
    <li className={`flex items-center justify-between bg-white rounded-lg shadow-md p-4 ${completed ? " bg-gray-400 line-through" : "bg-purple-100"}`}>  
        <span className={`cursor-pointer ${completed ? "hover:text-red-500" : ""}`}>Task 1</span>
        <button className="px-4 py-2 border rounded-s-xl bg-purple-900 text-white hover:bg-purple-800 transition-all duration-300 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
    </li>
  )
}