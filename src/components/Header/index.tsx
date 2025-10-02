import styles from "./styles.module.css"
import Logo from "../../assets/DtMoneyLogo.svg"


export function Header() {
    return <header className={styles.header}>
        <div className={styles.headerContent}>
            <img src={Logo} alt="" />
            <button>Nova transação</button>
        </div>
    </header>
}