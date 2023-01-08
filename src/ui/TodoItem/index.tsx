import React from "react"

type props = {
    text: string, 
    completed: boolean,
    onComplete: () => void,
    onDelete: () => void,
    onEdit: () => void
}

function TodoItem(props: props) {
    
    return (
        <li className="
            flex 
            text-xl
            font-medium
            min-h-[60px]
            ">

            <span 
                onClick={props.onComplete}
                className="
                    w-[5%]
                    mx-1 
                    py-1 
                    cursor-pointer
                    text-left ">{props.completed ? "✅": "☑"}
            </span>

            <p 
                className={`
                    w-[90%] 
                    mx-1 
                    py-1 
                    text-left 
                    ${props.completed ? "line-through": ""}`
                    }>{props.text}
            </p>

            <span 
                onClick={props.onEdit}
                className="
                    w-[5%]
                    mx-1 
                    py-1 
                    cursor-pointer
                    text-left"
            >✏</span>
            <span 
                onClick={props.onDelete}
                className="
                    w-[5%]
                    mx-1 
                    py-1 
                    cursor-pointer
                    text-left"
            >❌</span>
        </li>
    )
}

export { TodoItem }