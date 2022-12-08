import React from "react"

function useLocalStorage<T>(itemName: string, initialValue: T[]): {error: boolean, loading: boolean, item: T[], saveItem: (newItem: T[]) => void, synchronizeItem: () => void} {
    const [synchronizedItem, setSynchronizedItem] = React.useState(false)
    const [error, setError] = React.useState(false)
    const [loading, setLoading] = React.useState(true)
    const [item, setItem] = React.useState(initialValue)
    
    React.useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName)
          let parsedItem:  T[]
          
          if(!localStorageItem) {
            parsedItem = initialValue
            localStorage.setItem(itemName, JSON.stringify(parsedItem))
          } else {
            parsedItem = JSON.parse(localStorageItem)
          }
    
          saveItem(parsedItem)
          setLoading(false)
          setSynchronizedItem(true)

        } catch(error) {
          setError(true)
        } finally {
          setLoading(false)
        }
      }, 1000)
  
    }, [synchronizedItem])
  
  
    const saveItem = (newItem: T[]) => {
      setItem(newItem)
      const stringifiedTodos = JSON.stringify(newItem)
      localStorage.setItem(itemName, stringifiedTodos)
    }

    const synchronizeItem = () => {
      setLoading(true)
      setSynchronizedItem(false)
    }
  
    return {
      error,
      loading,
      item, 
      saveItem,
      synchronizeItem
    }
  }

export { useLocalStorage }