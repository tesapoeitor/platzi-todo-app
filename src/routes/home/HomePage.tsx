import React from "react"
import { TodoHeader } from "../../ui/TodoHeader"
import { TodoCounter } from "../../ui/TodoCounter"
import { TodoSearch } from "../../ui/TodoSearch"
import { TodoList } from "../../ui/TodoList"
import { TodoItem } from "../../ui/TodoItem"
import { TodoForm } from "../..//ui/TodoForm"
import { TodoError } from "../../ui/TodoError"
import { TodoLoading } from "../../ui/TodoLoading"
import { EmptyTodo } from "../../ui/EmptyTodo"
import { CreateTodoButton } from "../../ui/CreateTodoButton"
import { Modal } from "../../ui/Modal"
import { useTodos } from "./../useTodos"
import { ChangeAlert } from "../../ui/ChangeAlert"
import { useLocation, useNavigate } from "react-router-dom"

function HomePage() {
  const { 
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    // openModal,
    // setOpenModal,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    addTodo,
    synchronizeTodo
} = useTodos()

  const navigate = useNavigate()
  
  return (
    
    <React.Fragment>
      <TodoHeader>
          <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos}/>
          <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
      </TodoHeader>


      <TodoList 
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchValue}
        onError={() => <TodoError/>}
        onLoading={() => <TodoLoading/>}
        onEmptyTodos={() => <EmptyTodo/>}
        onEmptySearchResults={(searchText: string) => <p>No hay resultados para {searchText}</p>}
        render={todo => {
          return <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
            onComplete={completeTodo(todo.id)}
            onDelete={deleteTodo(todo.id)}
            onEdit={() => {
              navigate(`/edit/${todo.id}`,
                {state: todo}
              )
            }}/>
           }
          }
      />
        
      <CreateTodoButton/>

      <ChangeAlert synchronize={synchronizeTodo}/>
  </React.Fragment>
  )
}

export { HomePage }
