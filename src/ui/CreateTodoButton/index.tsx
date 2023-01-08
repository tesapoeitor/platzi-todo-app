import React from "react"
import { useNavigate } from "react-router-dom"

function CreateTodoButton() {
    const navigate = useNavigate()
    const onClickButton = () => {
       navigate("/create")
    }

    return (
        <button className="
            fixed
            bottom-5
            right-5
            w-[64px] 
            h-[64px] 
            bg-indigo-500 
            text-[50px] 
            text-white 
            leading-[50px] 
            rounded-full
            z-10"
            
            onClick={onClickButton}>

            <span className={`
                absolute top-[2px] 
                right-[14px]
                `}>+
            </span>
        </button>
    )
}

export { CreateTodoButton }