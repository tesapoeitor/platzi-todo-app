import React from "react"
import { TodoContext } from "../TodoContext"
import { TodoContextType } from "../Types/Todo"

function TodoSearch() {
    const { searchValue, setSearchValue } = React.useContext(TodoContext) as TodoContextType

    const onSearchValueChange = (e: any) => {
        console.log(e.target.value)
        setSearchValue(e.target.value)
    }

    return (
        <input 
            onChange={onSearchValueChange}
            value={searchValue}
            type="text" 
            placeholder="Buscar..." 
            className="
                w-[85%] 
                mx-auto 
                mt-7 
                p-1 
                pl-[20px] 
                border-b-[2px]
                "/>
    )
}

export { TodoSearch }