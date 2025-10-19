import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import styles from "./styles.module.css";
import { PriceHighlight } from "../../components/PriceHighlight";
import { SearchForm } from "../../components/SearchForm";
import { useState } from "react";

import { TransactionContext } from "../../context/TransactionContext.";
import { Trash } from "phosphor-react";
import { useContextSelector } from "use-context-selector";

export function Transactions() {
  
    

   const filterSearchListContext = useContextSelector(TransactionContext, (context) => {
    return context.filterSearchList
   })

   const deleteTransactionContext = useContextSelector(TransactionContext, (context) => {
    return context.deleteTransaction
   })

    const [open, setOpen] = useState(false)

  return (
    <div>
      <Header open = {open} setOpen = {setOpen} />
      <Summary />
      <SearchForm />
      <div className={styles.transactionsContainer}>
        <table className={styles.tableTransactions}>
          <tbody>
            {filterSearchListContext.map((transaction) => (
              <tr key={transaction.id}>
                <td width="50%">{transaction.description}</td>
                <td>
                  <PriceHighlight
                    variant={
                      transaction.type === "income" ? "income" : "outcome"
                    }
                  >
                    
                    {transaction.price.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </PriceHighlight>
                </td>
                <td>{transaction.category.toUpperCase()}</td>
                <td>{transaction.created_At}
                 <button onClick={async () => await deleteTransactionContext(transaction.id)}>
                 <Trash color="#F75A68" size={20}/>
                </button>
                </td>
                

                
              </tr>
            ))}
            
          </tbody>
        </table>
      </div>
    </div>
  );
}
