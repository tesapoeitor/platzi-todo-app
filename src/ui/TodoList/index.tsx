import React, { ReactNode } from "react"
import { ITodo, TodoContextType } from "../Types/Todo"

type Props = {
    error: TodoContextType["error"],
    loading: TodoContextType["loading"],
    searchedTodos: ITodo[],
    totalTodos: TodoContextType["totalTodos"],
    searchText: TodoContextType["searchValue"],
    onError: () => ReactNode,
    onLoading: () => ReactNode,
    onEmptyTodos: () => ReactNode,
    onEmptySearchResults: (searchText: string) => ReactNode,
    render: (todo: ITodo) => ReactNode,
}

function TodoList(props: Props) {
    return (
        <section className="mt-7 p-[15px]">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}

            {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText)}

            <ul>
                {!props.loading && props.searchedTodos.map(props.render)}
            </ul>
        </section>
    )
}

export { TodoList }