import styles from "./styles.module.css"
import Logo from "../../assets/DtMoneyLogo.svg"
import * as Dialog from "@radix-ui/react-dialog"
import { NewTransactionModal } from "../NewTransactionModal"


export function Header() {
    return <header className={styles.header}>
        <div className={styles.headerContent}>
            <img src={Logo} alt="" />

            <Dialog.Root>
                <Dialog.DialogTrigger asChild>
                    <button>Nova transação</button>
                </Dialog.DialogTrigger>

                <NewTransactionModal/>
            </Dialog.Root>
            
        </div>
    </header>
}