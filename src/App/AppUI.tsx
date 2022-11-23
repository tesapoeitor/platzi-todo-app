import React from "react"
import { TodoCounter } from "../TodoCounter"
import { TodoSearch } from "../TodoSearch"
import { TodoList } from "../TodoList"
import { TodoItem } from "../TodoItem"
import { TodoForm } from "../TodoForm"
import { CreateTodoButton } from "../CreateTodoButton"
import { TodoContext } from "../TodoContext"
import { ITodo, TodoContextType } from "../Types/Todo"
import { Modal } from "../Modal"

//  type Props = {
//     completedTodos: number,
//     searchValue: string,
//     searchedTodos: {
//         text: string;
//         completed: boolean;
//     }[],
//     totalTodos: number,
//     setSearchValue: React.Dispatch<React.SetStateAction<string>>,
//     completeTodo: (text: string) => () => void,
//     deleteTodo: (text: string) => () => void,
//     error: boolean,
//     loading: boolean
// }

export function AppUI() {

        const { 
            error,
            loading,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal
        } = React.useContext(TodoContext) as TodoContextType
    return (
        <React.Fragment>
            <TodoCounter/>
            <TodoSearch/>
    
            <TodoList>
                {error && <p>Desespérate ocurrio un error...</p>}
                {loading && <p>Estamos cargando no desesperes...</p>}
                {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}

                {searchedTodos.map(todo => {
                    return <TodoItem 
                    key={todo.text} 
                    text={todo.text} 
                    completed={todo.completed}
                    onComplete={completeTodo(todo.text)}
                    onDelete={deleteTodo(todo.text)}/>
                })}
            </TodoList>

            {openModal && (
                <Modal>
                    <TodoForm/>   
                </Modal>   
            )}
                    
                

            <CreateTodoButton 
            setOpenModal={setOpenModal}
            openModal={openModal}
            />
        </React.Fragment>
    )
}