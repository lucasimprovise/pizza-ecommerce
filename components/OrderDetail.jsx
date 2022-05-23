import styles from "../styles/OrderDetail.module.css";
import { useState } from "react";

const OrderDetail = ({ total, createOrder }) => {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");

  const handleClick = () => {
    createOrder({ customer, address, total, method: 0 });
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Vous payerez 12 euros après la livraison</h1>
        <div className={styles.item}>
          <label className={styles.label}>Prenom Nom</label>
          <input
            placeholder="John Doe"
            type="text"
            className={styles.input}
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Numéro de tel.</label>
          <input
            type="text"
            placeholder="06 06 06 06 06"
            className={styles.input}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Addresse</label>
          <textarea
            rows={5}
            placeholder="12 rue Anatole France"
            type="text"
            className={styles.textarea}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button className={styles.button} onClick={handleClick}>
          Commander
        </button>
      </div>
    </div>
  );
};

export default OrderDetail;
