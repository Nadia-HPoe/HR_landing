import Title from "../Title/Title";
import styles from "./services.module.scss";

function Services() {
  return (
    <section className={styles.services} id='service'>
      <Title title='Мои услуги' />
      <div className={styles.cards}>
        <div className={styles.card}>
          <h5 className={styles.card_title}>Delivery Recruitment</h5>
          <p className={styles.card_text}>
            Могу рассказать, как обеспечить постоянный поток кандидатов на ваши
            вакансии, а также оптимизировать процесс работы с ними
          </p>
          <a
            href='https://2meetup.in/evgeniiaorlova/meet'
            className={styles.card_button}
          >
            записаться
          </a>
        </div>
        <div className={styles.card}>
          <h5 className={styles.card_title}>HR автоматизация</h5>
          <p className={styles.card_text}>
            Подбор, настройка и сопровождение целевых систем по работе с
            персоналом для вашего бизнеса и дальнейшее сопровождение
          </p>
          <a
            href='https://2meetup.in/evgeniiaorlova/meet'
            className={styles.card_button}
          >
            записаться
          </a>
        </div>
        <div className={styles.card}>
          <h5 className={styles.card_title}>Запуск воронки найма</h5>
          <p className={styles.card_text}>
            Разработка эффективной стратегии найма и продвижения вашего бренда
            работодателя на рынке труда: это позволит привлечь лучших подходящих
            специалистов для вашего бизнеса.
          </p>
          <a
            href='https://2meetup.in/evgeniiaorlova/meet'
            className={styles.card_button}
          >
            записаться
          </a>
        </div>
        <div className={styles.card}>
          <h5 className={styles.card_title}>HR-Admin</h5>
          <p className={styles.card_text}>
            Оказываю помощь во всех вопросах, связанных с трудовым правом, чтобы
            вы могли спокойно развивать свой бизнес, не волнуясь о юридических
            тонкостях
          </p>
          <a
            href='https://2meetup.in/evgeniiaorlova/meet'
            className={styles.card_button}
          >
            записаться
          </a>
        </div>
        <div className={styles.card}>
          <h5 className={styles.card_title}>Аутплейсмент для вашей компании</h5>
          <p className={styles.card_text}>
            Сопровождение оптимизации штата компании и ведение сложных
            увольнений. Весь процесс строго конфидециален для бизнеса
          </p>
          <a
            href='https://2meetup.in/evgeniiaorlova/meet'
            className={styles.card_button}
          >
            записаться
          </a>
        </div>
      </div>
      <ul className={styles.list}>
        <span>
          Стоимость консультации от 10000₽ <br />
          (в зависимости от запроса):
        </span>
        <li className={styles.list_item}>первая со скидкой 30%</li>
        <li className={styles.list_item}>вторичная со скидкой 10%</li>
        <li className={styles.list_item}>далее по договоренности</li>
      </ul>
    </section>
  );
}
export default Services;
