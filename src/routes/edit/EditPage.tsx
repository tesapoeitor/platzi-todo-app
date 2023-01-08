import React from "react"
import { TodoForm } from "../../ui/TodoForm"
import { useTodos } from "../useTodos"
import { useParams } from "react-router-dom"

function EditPage() {
    const params = useParams()
    const id = Number(params.id)
    const { editTodo } = useTodos()
    

    return (
        <TodoForm
            label={"Editar TODO"}
            submitText={"Guardar"}
            submitEvent={(text) => editTodo(id, text)}
        />
    )
}

export { EditPage }