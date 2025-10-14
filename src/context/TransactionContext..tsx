import axios from "axios";
import { createContext, useEffect, useState } from "react";

interface TransactionContextProviderProps {
  children: React.ReactNode;
}

interface Transaction {
  id : string
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
  deleteTransaction : (id : string) => Promise<void>
}

export const TransactionContext = createContext({} as TransactionContextProps);

export function TransactionContextProvider({children,}: TransactionContextProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const [searchState, setSearchState] = useState("");
  const filterSearchList = transactions.filter((transactions) =>
    transactions.description.includes(searchState.toUpperCase())
  );



  async function getTransactions() {
      const response = await axios.get("http://localhost:3000/transactions");
      const data = await response.data
      console.log(data);

      setTransactions(data);

  }

 
  useEffect(() => {
    getTransactions()
  }, [])

  async function newTransaction(newItem: Transaction) {
    // AQUI ACONTECE O ENVIO PARA JSON-SERVER COM NEWITEM QUE VEIO DO NewTransactionModal
    const response = await axios.post(
      "http://localhost:3000/transactions",
      newItem
    );

    const createditem = response.data;

    setTransactions((state) => [...state, createditem]);
    
    
  }

  async function deleteTransaction(id : string) {

    await axios.delete(`http://localhost:3000/transactions/${id}`, {
      
    })
    
    const transactionsDelete = transactions.filter((transactions) => transactions.id !== id)
    setTransactions(transactionsDelete)

    

  }

  return (
    <TransactionContext.Provider
      value={{ searchState, setSearchState, filterSearchList, newTransaction, transactions, deleteTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  );
}
