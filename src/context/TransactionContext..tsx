import axios from "axios";
import { createContext, useEffect, useState } from "react";

interface TransactionContextProviderProps {
  children: React.ReactNode;
}

interface Transaction {
  id: string;
  description: string;
  type: string
  category: string;
  price: number;
  created_At: string;
}

interface TransactionContextProps {
  searchState: string;
  setSearchState: React.Dispatch<React.SetStateAction<string>>;
  filterSearchList: Transaction[];
  newTransaction: (newItem: Transaction) => Promise<void>;
  transactions : Transaction[]
}

export const TransactionContext = createContext({} as TransactionContextProps);

export function TransactionContextProvider({children,}: TransactionContextProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const [searchState, setSearchState] = useState("");
  const filterSearchList = transactions.filter((transactions) =>
    transactions.description.includes(searchState.toUpperCase())
  );

  useEffect(() => {
    async function getTransactions() {
      const response = await axios.get("http://localhost:3000/transactions");
      console.log(response.data);

      setTransactions(response.data);
    }

    getTransactions();
  }, []);

  async function newTransaction(newItem: Transaction) {
    const response = await axios.post(
      "http://localhost:3000/transactions",
      newItem
    );

    const createditem = response.data;

    setTransactions((state) => [...state, createditem]);
    console.log(transactions)
  }

  return (
    <TransactionContext.Provider
      value={{ searchState, setSearchState, filterSearchList, newTransaction, transactions }}
    >
      {children}
    </TransactionContext.Provider>
  );
}
