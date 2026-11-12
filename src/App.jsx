import AddTask from "./components/AddTask"
import Tasks from "./components/Tasks"
import { useState } from "react"
function App() {

  const[tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar React",
      description: "Estudar React para o projeto de Gerenciador de Tarefas",
      isCompleted: false
    },
    {
      id: 2,
      title: "Estudar Tailwind",
      description: "Estudar Tailwind para o projeto de Gerenciador de Tarefas", 
      isCompleted: false
    },

    {
      id: 3,
      title: "Estudar Vite",
      description: "Estudar Vite para o projeto de Gerenciador de Tarefas",
      isCompleted: false
    }

  ])
  return (
    <div className="w-screen h-screen  bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl font-bold text-white text-center">Gerenciador de tarefas</h1>
        <AddTask />
        <Tasks tasks={tasks} />
      </div>
    </div>
  )
}

 
export default App
