import React from "react"
import { ITodo } from "../ui/Types/Todo"

interface State {
  synchronizedItem: boolean,
  error: boolean,
  loading: boolean,
  item: any
}

interface Action {
  type: "ERROR" | "SUCCESS" | "SAVE" | "SYNCHRONIZE"
  payload?: any
}

function useLocalStorage<T>(itemName: string, initialValue: T[]): {error: boolean, loading: boolean, item: T[], saveItem: (newItem: T[]) => void, synchronizeItem: () => void} {
  // const [synchronizedItem, setSynchronizedItem] = React.useState(false)
  // const [error, setError] = React.useState(false)
  // const [loading, setLoading] = React.useState(true)
  // const [item, setItem] = React.useState(initialValue)

  const initialState: State = {
    synchronizedItem: false,
    error: false,
    loading: true,
    item: initialValue
  }

  const [state, dispatch] = React.useReducer(reducer, initialState)
  const { error, synchronizedItem, loading, item } = state as State

  const onSuccess = (item: T[]) => dispatch({
    type: "SUCCESS",
    payload: item
  })

  const onError = () => dispatch({
    type: "ERROR"
  })

  const onSave = (item: T[]) => dispatch({
    type: "SAVE",
    payload: item
  })

  const onSynchronize = () => dispatch({
    type: "SYNCHRONIZE"
  })
  
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
  
        // saveItem(parsedItem)
        // setLoading(false)
        // setSynchronizedItem(true)

        onSuccess(parsedItem)

      } catch(error) {
        onError()
      } 
      // finally {
      //   setLoading(false)
      // }
    }, 1000)

  }, [synchronizedItem])


  const saveItem = (newItem: T[]) => {
    try {
      onSave(newItem)
      const stringifiedTodos = JSON.stringify(newItem)
      localStorage.setItem(itemName, stringifiedTodos)
    } catch (error) {

    }
  }

  const synchronizeItem = () => {
    // setLoading(true)
    // setSynchronizedItem(false)
    onSynchronize()
  }

  return {
    error,
    loading,
    item, 
    saveItem,
    synchronizeItem
  }
}

const reducerObject = (state: State, payload: any[] = []) => ({
  SUCCESS: {
    ...state,
    item: payload,
    loading: false,
    synchronizedItemItem: true
  },
  ERROR: {
    ...state,
    error: true,
    loading: false
  },
  SAVE: {
    ...state,
    item: payload
  },
  SYNCHRONIZE: {
    ...state,
    loading: true,
    synchronizedItem: false
  }
})

const reducer = (state: State, action: Action) => {
  return reducerObject(state, action.payload)[action.type]
}

export { useLocalStorage }