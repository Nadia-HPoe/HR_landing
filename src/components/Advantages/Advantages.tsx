import styles from "./advantages.module.scss";
import Icon1 from "../../assets/images/icon1.png";
import Icon2 from "../../assets/images/icon2.png";
import Icon3 from "../../assets/images/icon3.png";
import Icon4 from "../../assets/images/icon4.png";
import Icon5 from "../../assets/images/icon5.png";
import Icon6 from "../../assets/images/icon6.png";
import Title from "../Title/Title";

function Advantages() {
  return (
    <section className={styles.advantages}>
      <Title title='Преимущества работы со мной' />
      <div className={styles.cards}>
        <div className={styles.card}>
          <img className={styles.icon} src={Icon1} alt='' />
          <p className={styles.text}>Официальный договор на оказание услуг</p>
        </div>
        <div className={styles.card}>
          <img className={styles.icon} src={Icon2} alt='' />
          <p className={styles.text}>Индивидуальное подход</p>
        </div>
        <div className={styles.card}>
          <img className={styles.icon} src={Icon3} alt='' />
          <p className={styles.text}>13 лет опыта HR + портфолио проектов</p>
        </div>
        <div className={styles.card}>
          <img className={styles.icon2} src={Icon4} alt='' />
          <p className={styles.text}>
            Вы получаете 10 % скидку на повторное обращение
          </p>
        </div>
        <div className={styles.card}>
          <img className={styles.icon2} src={Icon5} alt='' />
          <p className={styles.text}>Онлайн поддержка по вашим вопросам</p>
        </div>
        <div className={styles.card}>
          <img className={styles.icon} src={Icon6} alt='' />
          <p className={styles.text}>
            Работаю офлайн (Москва и Санкт-Петербург) и онлайн
          </p>
        </div>
      </div>
    </section>
  );
}
export default Advantages;
