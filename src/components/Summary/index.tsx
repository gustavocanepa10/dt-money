import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import styles from "./styles.module.css";

import { TransactionContext } from "../../context/TransactionContext.";
import { useContextSelector } from "use-context-selector";

export function Summary() {
  const transactions = useContextSelector(TransactionContext, (context) => {
    return context.transactions
  });

  const incomes = transactions
    .filter((item) => item.type === "income")
    .map((item) => item.price);
  console.log(incomes);

  const totalIncomes = incomes.reduce(
    (acc, currentValue) => acc + currentValue,
    0
  );
  console.log(totalIncomes);

  const outcomes = transactions
    .filter((item) => item.type === "outcome")
    .map((item) => item.price);
  console.log(outcomes);

  const totalOutcomes = outcomes.reduce(
    (acc, currentValue) => acc + currentValue,
    0
  );
  console.log(totalIncomes);

  const total = totalIncomes - totalOutcomes;

  return (
    <section className={styles.summaryContainer}>
      <div className={styles.summaryCard}>
        <header>
          <span>Entregas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong>
          {totalIncomes.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </strong>
      </div>

      <div className={styles.summaryCard}>
        <header>
          <span>Saidas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        <strong>
          {totalOutcomes.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </strong>
      </div>

      <div className={styles.summaryCardGreen}>
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>
        
        <strong>
          
          {total.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).replace("-", "- ")}
        </strong>
      </div>
    </section>
  );
}
