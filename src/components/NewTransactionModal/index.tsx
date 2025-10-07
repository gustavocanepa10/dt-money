import * as Dialog from "@radix-ui/react-dialog";
import styles from "./styles.module.css"
import { ArrowCircleUp, X } from "phosphor-react";
import {ArrowCircleDown} from "phosphor-react"

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className={styles.Overlay} />

      <Dialog.Content className={styles.Content}>
        <Dialog.Title>Nova transação</Dialog.Title>

        <Dialog.Close className={styles.ButtonClose}>
            <X size={24}/>
        </Dialog.Close>

        <form action="">
            <input type="text" placeholder="Descrição" required />
            <input type="number" placeholder="Preço" required />
            <input type="text" placeholder="Categoria" required />

            <div className={styles.transactionType}>
                <button>
                    <ArrowCircleUp size={24} color="#00B37E"/>
                    Entrada
                </button>
                <button>
                    <ArrowCircleDown size={24} color="#F75A68"/>
                    Saida
                </button>
            </div>


            <button type="submit">
                Cadastrar
            </button>
        </form>

        
      </Dialog.Content>
    </Dialog.Portal>
  );
}
