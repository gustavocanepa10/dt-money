import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import styles from "./styles.module.css";
import { PriceHighlight } from "../../components/PriceHighlight";
import { SearchForm } from "../../components/SearchForm";
import { useContext, useState } from "react";

import { TransactionContext } from "../../context/TransactionContext.";
import { Trash } from "phosphor-react";

export function Transactions() {
  const { searchState, setSearchState, filterSearchList, deleteTransaction } =
    useContext(TransactionContext);

    const [open, setOpen] = useState(false)

  return (
    <div>
      <Header open = {open} setOpen = {setOpen} />
      <Summary />
      <SearchForm searchState={searchState} setSearchState={setSearchState} />
      <div className={styles.transactionsContainer}>
        <table className={styles.tableTransactions}>
          <tbody>
            {filterSearchList.map((transaction) => (
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
                 <button onClick={async () => await deleteTransaction(transaction.id)}>
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
