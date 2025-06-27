import Title from "../Title/Title";
import styles from "./services.module.scss";

function Services() {
  return (
    <section className={styles.services} id='service'>
      <Title title='Мои услуги' />
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
        <div className={styles.card}>
          <h5 className={styles.card_title}>HR-Admin</h5>
          <p className={styles.card_text}>
            Оказываю помощь во всех вопросах, связанных с трудовым правом, чтобы
            вы могли спокойно развивать свой бизнес, не волнуясь о юридических
            тонкостях
          </p>
          <button className={styles.card_button}>записаться</button>
        </div>
        <div className={styles.card}>
          <h5 className={styles.card_title}>Delivery Recruitment</h5>
          <p className={styles.card_text}>
            Могу рассказать, как обеспечить постоянный поток кандидатов на ваши
            вакансии, а также оптимизировать процесс работы с ними
          </p>
          <button className={styles.card_button}>записаться</button>
        </div>
      </div>
      <ul className={styles.list}>
        <span>
          Стоимость консультации от 7000₽ <br />
          (в зависимости от запроса):
        </span>
        <li className={styles.list_item}>первая со скидкой 50%</li>
        <li className={styles.list_item}>вторичная со скидкой 10%</li>
        <li className={styles.list_item}>далее по договоренности</li>
      </ul>
    </section>
  );
}
export default Services;
