import React, { FormEvent } from "react";
import { TodoContext } from "../App/useTodos";
import { TodoContextType } from "../Types/Todo";
import "./index.css";

type Props = {
    setOpenModal: TodoContextType["setOpenModal"],
    addTodo:  TodoContextType["addTodo"]
}

function TodoForm({ setOpenModal, addTodo }: Props) {
    const [newTodoValue, setNewTodoValue] = React.useState("")

    const onCancel = () => {
        setOpenModal(false)
    }
    
    const onAdd = (event: FormEvent) => {
        event.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
    }

    const onEdit = (event: FormEvent) => {
        const textArea = event.target as HTMLTextAreaElement
        setNewTodoValue(textArea.value)
    }

    return (
        <form action="" onSubmit={onAdd}>
            <label>Escribe tu nuevo TODO</label>
            <textarea name="" id="" cols={30} rows={5} placeholder="Cortar Cebollas" onChange={onEdit}></textarea>

            <div className="TodoForm-buttonContainer">
                <button type="button" onClick={onCancel} className="TodoForm-button TodoForm-button--cancel">Cancelar</button>

                <button type="submit" className="TodoForm-button TodoForm-button--add">Añadir</button>
            </div>
        </form>
    )
}

export { TodoForm }