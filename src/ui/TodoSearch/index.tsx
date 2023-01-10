import React from "react"

type Props = {
    searchValue: string,
    setSearchValue: React.Dispatch<React.SetStateAction<string>>
}

function TodoSearch({ searchValue, setSearchValue }: Props) {

    const onSearchValueChange = (e: React.FormEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value)
        setSearchValue(e.currentTarget.value)
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