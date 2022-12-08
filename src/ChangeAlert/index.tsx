import React from "react"
import { withStorageListener } from "./withStorageListener"

export type Props = {
    show: boolean,
    toggleShow:  () => void,
    synchronize: () => void
}

function ChangeAlert({ show, toggleShow  }: Props) {
    if(show) {
        return (
            <>
                <p>Hubo Cambios</p>
                <button
                    onClick={() => toggleShow()}
                >Volver a cargar la información</button>
            </>
        )
    }
    return null
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export { ChangeAlertWithStorageListener }