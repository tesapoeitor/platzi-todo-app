import { ReactNode } from "react"
import { ITodo } from "../Types/Todo"

type Props = {
    error: boolean,
    loading: boolean,
    searchedTodos: ITodo[],
    onError: () => ReactNode,
    onLoading: () => ReactNode,
    onEmpty: () => ReactNode,
    render: (todo: ITodo) => ReactNode
}

function TodoList(props: Props) {
    return (
        <section className="mt-7 p-[15px]">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(!props.loading && !props.searchedTodos.length) && props.onEmpty()}

            <ul>
                {props.searchedTodos.map(props.render)}
            </ul>
        </section>
    )
}

export { TodoList }