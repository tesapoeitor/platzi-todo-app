import React from "react"

type Props = {
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>,
    openModal: boolean
}

function CreateTodoButton({
    setOpenModal,
    openModal
}: Props) {
    const onClickButton = () => {
        openModal ? setOpenModal(false) : setOpenModal(true)
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
                ` + (openModal ? " rotate" : " ")}>+
            </span>
        </button>
    )
}

export { CreateTodoButton }