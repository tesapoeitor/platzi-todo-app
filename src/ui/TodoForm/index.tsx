import React, { FormEvent } from "react";
import { TodoContextType } from "../Types/Todo";
import "./index.css";
import { useNavigate } from "react-router-dom";

type Props = {
    submitEvent:  TodoContextType["addTodo"]
    label: string,
    submitText: string,
    defaultTodoText?: string
}

function TodoForm(props: Props) {
    const [newTodoValue, setNewTodoValue] = React.useState(props.defaultTodoText ?? "")
    const navigate = useNavigate()

    const onCancel = () => {
        navigate("/")
    }
    
    const onSubmit = (event: FormEvent) => {
        event.preventDefault()
        props.submitEvent(newTodoValue)
        navigate("/")
    }

    const onEdit = (event: FormEvent) => {
        const textArea = event.target as HTMLTextAreaElement
        setNewTodoValue(textArea.value)
    }

    return (
        <form action="" onSubmit={onSubmit}>
            <label>{props.label}</label>
            <textarea value={newTodoValue} name="" id="" cols={30} rows={5} placeholder="Cortar Cebollas" onChange={onEdit}></textarea>

            <div className="TodoForm-buttonContainer">
                <button type="button" onClick={onCancel} className="TodoForm-button TodoForm-button--cancel">Cancelar</button>

                <button type="submit" className="TodoForm-button TodoForm-button--add">{props.submitText}</button>
            </div>
        </form>
    )
}

export { TodoForm }