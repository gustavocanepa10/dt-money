import styles from "./styles.module.css"


interface PriceHighlightColor {
    variant : 'income' | 'outcome'
    children : React.ReactNode

}




export function PriceHighlight({children, variant} : PriceHighlightColor) {
    return <span  className={variant === 'income' ? styles.greenHighlight : styles.redHighlight}>
        {children}
    </span>
}