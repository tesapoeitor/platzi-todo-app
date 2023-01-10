import React from "react"
import { useSearchParams } from "react-router-dom"

type Props = {
    searchValue: string,
    setSearchValue: React.Dispatch<React.SetStateAction<string>>
}

function TodoSearch({ searchValue, setSearchValue }: Props) {
    const [searchParams, setSearchParams] = useSearchParams()

    React.useEffect(() => {
        const searchText = searchParams.get("search") ?? ""
        setSearchValue(searchText)
    }, [])

    const onSearchValueChange = (e: React.FormEvent<HTMLInputElement>) => {
        const searchText = e.currentTarget.value
        
        setSearchValue(searchText)
        if(searchText) {
            setSearchParams({search: searchText})
        } else {
            setSearchParams("")
        }
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
            "
        />
    )
}

export { TodoSearch }