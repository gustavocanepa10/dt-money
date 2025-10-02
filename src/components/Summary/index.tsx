import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react"
import styles from "./styles.module.css"

export function Summary() {
    return (
        <section className={styles.summaryContainer}>
            <div className={styles.summaryCard}>
                <header>
                    <span>
                        Entregas
                    </span>
                    <ArrowCircleUp size={32} color="#00b37e"/>
                </header>
                <strong>
                    R$ 17,400,00
                </strong>
            </div>

            <div  className={styles.summaryCard}>
                <header>
                    <span>
                        Saidas
                    </span>
                    <ArrowCircleDown size={32} color="#f75a68"/>
                </header>
                <strong>
                    R$ 17,400,00
                </strong>
            </div>


            <div  className={styles.summaryCardGreen}>
                <header>
                    <span>
                        Total
                    </span>
                    <CurrencyDollar size={32} color="#fff"/>
                </header>
                <strong>
                    R$ 17,400,00
                </strong>
            </div>




            
        </section>
    )
}