import React from "react"

type Props = {
    children: JSX.Element[]
}

function TodoHeader({ children }: Props) {
    return (
        <header>
            {children}
        </header>
    )
}

export { TodoHeader }