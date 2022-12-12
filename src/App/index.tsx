import React from "react"
import { TodoHeader } from "../TodoHeader"
import { TodoCounter } from "../TodoCounter"
import { TodoSearch } from "../TodoSearch"
import { TodoList } from "../TodoList"
import { TodoItem } from "../TodoItem"
import { TodoForm } from "../TodoForm"
import { TodoError } from "../TodoError"
import { TodoLoading } from "../TodoLoading"
import { EmptyTodo } from "../EmptyTodo"
import { CreateTodoButton } from "../CreateTodoButton"
import { Modal } from "../Modal"
import { useTodos } from "./useTodos"
import { ChangeAlert } from "../ChangeAlert"

function App() {
  const { 
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    addTodo,
    synchronizeTodo
} = useTodos()
  
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
            onComplete={completeTodo(todo.text)}
            onDelete={deleteTodo(todo.text)}/>
           }
          }
      />

      {openModal && (
          <Modal>
              <TodoForm setOpenModal={setOpenModal} addTodo={addTodo}/>   
          </Modal>   
      )}
              
          

      <CreateTodoButton 
      setOpenModal={setOpenModal}
      openModal={openModal}
      />

      <ChangeAlert synchronize={synchronizeTodo}/>
  </React.Fragment>
  )
}

export default App
