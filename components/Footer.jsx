import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            LA MEILLEURE PIZZA D'IDF, LA VIE DE MA MERE T'AS JAMAIS VU CA
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>OU NOUS TROUVER</h1>
          <p className={styles.text}>
            OLYMPIADE
            <br /> PARIS, 75013
            <br /> 06 06 06 06 06
          </p>
          <p className={styles.text}>
            12 RUE ANATOLE FRANCE
            <br /> NANTERRE, 92000
            <br /> 06 06 06 06 06
          </p>
          <p className={styles.text}>
            RUE DU VIENDEUXSPI
            <br /> PARIS(BARBES), 75018
            <br /> 06 06 06 06 06
          </p>
          <p className={styles.text}>
            RUE DU MEC COMPLETEMENT BARJOT
            <br /> CRETEIL, 94000
            <br />  06 06 06 06 06
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>HEURE D'OUVERTURE</h1>
          <p className={styles.text}>
            LUNDI - VENDREDI
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SAMEDI - DIMANCHE
            <br /> 12:00 – 00:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
