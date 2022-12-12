import { useStorageListener } from "./useStorageListener"

type Props = {
    synchronize: () => void
}

function ChangeAlert({ synchronize }: Props) {
    const { show, toggleShow } = useStorageListener(synchronize)

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

export { ChangeAlert }