import PizzaCard from "./PizzaCard";
import styles from "../styles/PizzaList.module.css";

const PizzaList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>LES MEILLEURS PIZZAS D'IDF</h1>
      <p className={styles.desc}>
      On a accueillis les plus grand comme les plus fauchés et vous même vous savez qu'il n'y a rien
      de plus réconfortant qu'une bonne Pizza entre ami ! Que ce soit pour regarder un bon match de 
      foot entre ami où pour pleurer votre ex qui vous a trompé, nous sommes la pour vous !
      </p>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
