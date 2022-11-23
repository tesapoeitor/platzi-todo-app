import React from "react"
import { TodoProvider } from "../TodoContext"
import { AppUI } from "./AppUI"

// const defaultTodos = [
//   {text:'Cortar cebolla', completed: true},
//   {text:'Tomar el curso de intro a react', completed: false},
//   {text:'Llorar con la llorona', completed: false},
//   {text:'Jugar un juego', completed: false}
// ]





function App() {
  
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  )
}

export default App
