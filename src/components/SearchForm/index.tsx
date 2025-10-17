
import { useContextSelector } from "use-context-selector";
import styles from "./styles.module.css";
import { MagnifyingGlass } from "phosphor-react";
import { TransactionContext } from "../../context/TransactionContext.";


export function SearchForm() {
  

  const searchStateContext = useContextSelector(TransactionContext, (context) => {
        return context.searchState
      })
  
      const setSearchStateContext = useContextSelector(TransactionContext, (context) => {
        return context.setSearchState
      })



  return (
    <form className={styles.searchFormContainer}>
      <input
        type="text"
        placeholder="Buscar uma transação"
        value={searchStateContext}
        onChange={(e) => setSearchStateContext(e.target.value)}
      />

      <button>
        <MagnifyingGlass weight="bold" size={16} />
        <span>Buscar</span>
      </button>
    </form>
  );
}
