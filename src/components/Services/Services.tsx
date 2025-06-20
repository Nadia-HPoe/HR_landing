import styles from "./services.module.scss";

function Services() {
  return (
    <section className={styles.services}>
      <h2 className={styles.title}>Мои услуги</h2>
      <div className={styles.cards}>
        <div className={styles.card}>
          <h5 className={styles.card_title}>Запуск воронки найма</h5>
          <p className={styles.card_text}>
            Разработка эффективной стратегии найма и продвижения вашего бренда
            работодателя на рынке труда. Это позволит привлечь лучших
            специалистов для вашего бизнеса. HR-Marketing
          </p>
          <button className={styles.card_button}>записаться</button>
        </div>
      </div>
      <ul className={styles.list}>
        Стоимость консультации от 7000₽ (в зависимости от запроса):
        <li className={styles.list_item}>первая со скидкой 50%</li>
        <li className={styles.list_item}>вторичная со скидкой 10%</li>
        <li className={styles.list_item}>далее по договоренности</li>
      </ul>
    </section>
  );
}
export default Services;
