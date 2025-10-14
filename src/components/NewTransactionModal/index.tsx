import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group";
import styles from "./styles.module.css";
import { ArrowCircleUp, X } from "phosphor-react";
import { ArrowCircleDown } from "phosphor-react";
import { useContext, useState } from "react";
import { TransactionContext } from "../../context/TransactionContext.";
import {v4 as uui4} from "uuid"


interface Transaction {
  id : string
  description: string;
  type: string;
  category: string;
  price: number;
  created_At: string;
}

export function NewTransactionModal() {
  const { newTransaction } = useContext(TransactionContext);

  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");

  function handleSubmit() {
    const newItem: Transaction = {
      id : uui4(),
      category,
      price,
      description,
      created_At: new Date().toLocaleDateString("pt-BR", {
        dateStyle: "medium",
      }),
      
      type,
    };

    newTransaction(newItem);
  }

 

  return (
    <Dialog.Portal>
      <Dialog.Overlay className={styles.Overlay} />

      <Dialog.Content className={styles.Content}>
        <Dialog.Title>Nova transação</Dialog.Title>

        <Dialog.Close className={styles.ButtonClose}>
          <X size={24} />
        </Dialog.Close>

        <form onSubmit={handleSubmit} action="">
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            placeholder="Descrição"
            required
          />
          <input
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            type="number"
            placeholder="Preço"
            required
          />
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            type="text"
            placeholder="Categoria"
            required
          />

          <RadioGroup.RadioGroup
            value={type}
            onValueChange={setType}
            className={styles.transactionType}
          >
            <RadioGroup.Item className={styles.buttonGreen} value="income">
              <ArrowCircleUp size={20} color="#00B37E" />
              Entrada
            </RadioGroup.Item>
            <RadioGroup.Item className={styles.buttonRed} value="outcome">
              <ArrowCircleDown size={20} color="#F75A68" />
              Saida
            </RadioGroup.Item>
          </RadioGroup.RadioGroup>

          <button type="submit">Cadastrar</button>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
