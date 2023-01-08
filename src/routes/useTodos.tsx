import React from "react";
import { useLocalStorage } from "./useLocalStorage";
import { ITodo } from "../ui/Types/Todo";


function useTodos() {
  const {
      item: todos, 
      saveItem: saveTodos,
      synchronizeItem: synchronizeTodo,
      error,
      loading
    }   = useLocalStorage<ITodo>("TODOS_V2", [])
  const [ searchValue, setSearchValue ] = React.useState("")

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

  

  const completeTodo = (id: ITodo["id"]) => {
    return () => {
      const todoIndex = todos.findIndex( todo => todo.id === id)
      const newTodos = [...todos]
      newTodos[todoIndex].completed = true
      saveTodos(newTodos)
    }
  }

  const editTodo = (id: ITodo["id"], text: ITodo["text"]) => {
    const todoIndex = todos.findIndex( todo => todo.id === id)
    if(todoIndex === -1) return
    const newTodos = [...todos]
    newTodos[todoIndex].text = text
    saveTodos(newTodos)
  }

  const addTodo = (text: ITodo["text"]) => {
    if(!text.trim()) return

    const id = newId()
    const newTodos = [...todos]
    newTodos.push({text, completed: false, id})
    saveTodos(newTodos)
  }

  const deleteTodo = (id: ITodo["id"]) => {
    return () => {
      const todoIndex = todos.findIndex( todo => todo.id === id)
      const newTodos = [...todos]
      newTodos.splice(todoIndex, 1)
      saveTodos(newTodos)
    }
  }


  return (
    {
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
      editTodo,
      synchronizeTodo
    }
  )
}

function newId() { 
  return Date.now()
}

export { useTodos }