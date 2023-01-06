import React from "react"
import ReactDOM from "react-dom"

function Modal ({ children }: any) {
    return ReactDOM.createPortal(
    <div className="
        bg-[#202329]
        opacity-80
        fixed
        top-[-10px]
        left-[-10px]
        right-[-10px]
        bottom-[-10px]
        flex
        justify-center
        items-center
        text-white
        
    ">
        {children}
      </div>,
      document.getElementById('modal') as HTMLDivElement
    )
}

export { Modal }