import styles from "./styles.module.css"

import * as Dialog from "@radix-ui/react-dialog"
import { NewTransactionModal } from "../NewTransactionModal"


interface HeaderProps {
    open : boolean
    setOpen : React.Dispatch<React.SetStateAction<boolean>>
}

export function Header({open, setOpen} : HeaderProps) {

    

    return <header className={styles.header}>
        <div className={styles.headerContent}>
            <div>

            </div>

            <Dialog.Root open = {open} onOpenChange={setOpen}>
                <Dialog.DialogTrigger asChild>
                    <button>Nova transação</button>
                </Dialog.DialogTrigger>

                <NewTransactionModal  setOpen = {setOpen} />
            </Dialog.Root>
            
        </div>
    </header>
}