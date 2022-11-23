import React from "react"

function useLocalStorage<T>(itemName: string, initialValue: T[]): {error: boolean, loading: boolean, item: T[], saveItem: (newItem: T[]) => void} {
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
        } catch(error) {
          setError(true)
        } finally {
          setLoading(false)
        }
      }, 1000)
  
    }, )
  
  
    const saveItem = (newItem: T[]) => {
      setItem(newItem)
      const stringifiedTodos = JSON.stringify(newItem)
      localStorage.setItem(itemName, stringifiedTodos)
    } 
  
    return {
      error,
      loading,
      item, 
      saveItem
    }
  }

export {useLocalStorage}