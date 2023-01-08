export interface ITodo {
    id: number,
    text: string,
    completed: boolean
}

export interface TodoContextType {
    completedTodos: number,
    searchValue: string,
    searchedTodos: {
        text: string;
        completed: boolean;
    }[],
    totalTodos: number,
    setSearchValue: React.Dispatch<React.SetStateAction<string>>,
    completeTodo: (text: string) => () => void,
    addTodo: (text: string) => void,
    deleteTodo: (text: string) => () => void,
    error: boolean,
    loading: boolean,
    openModal: boolean,
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

export type TC = Pick<TodoContextType, "error" | "loading" | "searchedTodos" | "completeTodo" | "deleteTodo"> 