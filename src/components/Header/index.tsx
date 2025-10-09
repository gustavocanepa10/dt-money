import styles from "./styles.module.css"

import * as Dialog from "@radix-ui/react-dialog"
import { NewTransactionModal } from "../NewTransactionModal"



export function Header() {

    

    return <header className={styles.header}>
        <div className={styles.headerContent}>
            <div>

            </div>

            <Dialog.Root>
                <Dialog.DialogTrigger asChild>
                    <button>Nova transação</button>
                </Dialog.DialogTrigger>

                <NewTransactionModal/>
            </Dialog.Root>
            
        </div>
    </header>
}