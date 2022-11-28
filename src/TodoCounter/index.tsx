import React from "react"
import { TodoContext } from "../App/useTodos"
import { TodoContextType } from "../Types/Todo"

type Props = {
    completedTodos: number,
    totalTodos: number
}

function TodoCounter({completedTodos, totalTodos}: Props) {
    return (
        <h2 className="
            m-[10px] 
            text-3xl 
            font-bold
        ">Has completado {completedTodos} de {totalTodos} ToDos</h2>
    )
}

export { TodoCounter }