
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import styles from "./styles.module.css";
import { PriceHighlight } from "../../components/PriceHighlight";
import { SearchForm } from "../../components/SearchForm";
import { useState } from "react";

const transactions = [
  {
    description: "Desenvolvimento de site",
    amount: "R$ 12.000.000",
    category: "Vendas",
    date: "13/04/2022",
    type : true
  },
  {
    description: "Conta de Luz",
    amount: "R$ - 29.00",
    category: "Contas a pagar",
    date: "10/04/2022",
    type : false
  },
  {
    description: "Cachorro Quente",
    amount: "R$ 18.00",
    category: "Alimentação",
    date: "10/08/2022",
    type : true
  }
]


export function Transactions() {

  const [searchState, setSearchState] = useState("")
  const filterSearchList = transactions.filter((transactions => transactions.description.includes(searchState.toUpperCase())))

  return (
    <div>
      <Header />
      <Summary />
      <SearchForm  searchState = {searchState} setSearchState = {setSearchState} />
      <div className={styles.transactionsContainer}>
        <table className={styles.tableTransactions}>
          <tbody>

            {filterSearchList.map((transaction) => <tr>
              <td width="50%">{transaction.description}</td>
              <td>
                <PriceHighlight variant={transaction.type ? "income" : "outcome"}>{transaction.amount}</PriceHighlight>
              </td>
              <td>{transaction.category}</td>
              <td>{transaction.date}</td>
            </tr> )}
            
            
          </tbody>
        </table>
      </div>
    </div>
  );
}
