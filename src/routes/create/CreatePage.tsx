import React from "react"
import { TodoForm } from "../../ui/TodoForm"
import { useTodos } from "../useTodos"

function CreatePage() {
    const { addTodo } = useTodos()

    return (
        <TodoForm
            label={"Crea un nuevo TODO"}
            submitText={"Crear"}
            submitEvent={(text) => addTodo(text)}
        />
    )
}

export { CreatePage }