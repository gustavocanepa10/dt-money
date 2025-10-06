
import styles from "./styles.module.css";
import { MagnifyingGlass } from "phosphor-react";

interface SearchFormProps {
  setSearchState: React.Dispatch<React.SetStateAction<string>>;
  searchState: string;
}

export function SearchForm({ searchState, setSearchState }: SearchFormProps) {
  console.log(searchState);

  return (
    <form className={styles.searchFormContainer}>
      <input
        type="text"
        placeholder="Buscar uma transação"
        value={searchState}
        onChange={(e) => setSearchState(e.target.value)}
      />

      <button>
        <MagnifyingGlass weight="bold" size={16} />
        <span>Buscar</span>
      </button>
    </form>
  );
}
