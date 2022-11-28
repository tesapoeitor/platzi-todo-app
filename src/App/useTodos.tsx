import React from "react";
import { useLocalStorage } from "./useLocalStorage";
import { ITodo } from "../Types/Todo";


function useTodos() {
    const {
        item: todos, 
        saveItem: saveTodos,
        error,
        loading
      }   = useLocalStorage<ITodo>("TODOS_V1", [])
      const [ searchValue, setSearchValue ] = React.useState("")
      const [ openModal, setOpenModal] = React.useState(false)
    
      const completedTodos = todos.filter(todo => todo.completed).length
      const totalTodos = todos.length
    
      let searchedTodos = []
    
      if(searchedTodos.length >= 1) {
        searchedTodos = todos
      } else {
        searchedTodos = todos.filter(todo => {
          const todoText = todo.text!.toLowerCase()
          const searchText = searchValue.toLowerCase()
    
          return todoText.includes(searchText)
        })
      }
    
      
    
      const completeTodo = (text: string) => {
        return () => {
          const todoIndex = todos.findIndex( todo => todo.text === text)
          const newTodos = [...todos]
          newTodos[todoIndex].completed = true
          saveTodos(newTodos)
        }
      }

      const addTodo = (text: string) => {
          if(!text.trim()) return
          const newTodos = [...todos]
          newTodos.push({text, completed: false})
          console.log(newTodos)
          saveTodos(newTodos)
      }
    
      const deleteTodo = (text: string) => {
        return () => {
          const todoIndex = todos.findIndex( todo => todo.text === text)
          const newTodos = [...todos]
          newTodos.splice(todoIndex, 1)
          saveTodos(newTodos)
        }
      }
    

    return ({
            error,
            loading,
            completedTodos,
            searchValue,
            searchedTodos,
            totalTodos,
            setSearchValue,
            completeTodo,
            addTodo,
            deleteTodo,
            openModal,
            setOpenModal
        }
    )
}

export { useTodos }