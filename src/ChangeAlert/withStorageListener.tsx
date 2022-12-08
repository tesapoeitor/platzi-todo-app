import React from "react";
import { Props } from "./index";

function withStorageListener(WrappedComponent: React.ComponentType<Props>) {
    return function wrappedComponentWithStorageListener(props: Omit<Props, "show" | "toggleShow">) {
        const [storageChange, setStorageChange] = React.useState(false)

        window.addEventListener("storage", (change) => {
            if(change.key === "TODOS_V1") {
                setStorageChange(true)
            }
        })

        const toggleShow = () => {
            setStorageChange(false);
            props.synchronize()
        }

        return (
            <WrappedComponent
                {...(props as Props)}
                show={storageChange}
                toggleShow={toggleShow}
            />
        )
    }
}

export { withStorageListener }