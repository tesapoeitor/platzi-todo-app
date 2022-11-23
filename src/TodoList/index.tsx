import React from "react"

function TodoList(props: {children: any}) {
    return (
        <section className="mt-7 p-[15px]">
            <ul>
                {props.children}
            </ul>
        </section>
    )
}

export { TodoList }