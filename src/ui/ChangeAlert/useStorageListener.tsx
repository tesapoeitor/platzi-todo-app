import React from "react";

function useStorageListener(synchronize: () => void) {
    const [storageChange, setStorageChange] = React.useState(false)

    window.addEventListener("storage", (change) => {
        if(change.key === "TODOS_V1") {
            setStorageChange(true)
        }
    })

    const toggleShow = () => {
        setStorageChange(false);
        synchronize()
    }

    return {
        show: storageChange,
        toggleShow
    }
}

export { useStorageListener }