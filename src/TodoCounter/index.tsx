import React from "react"
import { TodoContext } from "../TodoContext"
import { TodoContextType } from "../Types/Todo"

function TodoCounter() {
    const { completedTodos, totalTodos } = React.useContext(TodoContext) as TodoContextType

    return (
        <h2 className="
            m-[10px] 
            text-3xl 
            font-bold
        ">Has completado {completedTodos} de {totalTodos} ToDos</h2>
    )
}

export { TodoCounter }