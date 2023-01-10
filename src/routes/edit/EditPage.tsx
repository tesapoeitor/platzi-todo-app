import React from "react"
import { TodoForm } from "../../ui/TodoForm"
import { useTodos } from "../useTodos"
import { useLocation, useParams } from "react-router-dom"

function EditPage() {
    const params = useParams()
    const location = useLocation()
    const id = Number(params.id)
    const { getTodo, editTodo, loading } = useTodos()

    let todoText = getTodo(id)?.text
    
    if (location.state?.text) {
        todoText = location.state.text
    } else if (loading) {
        return <p>Cargando...</p>
    }

    return (
        <TodoForm
            label={"Editar TODO"}
            submitText={"Guardar"}
            defaultTodoText={todoText}
            submitEvent={(text) => editTodo(id, text)}
        />
    )
}

export { EditPage }