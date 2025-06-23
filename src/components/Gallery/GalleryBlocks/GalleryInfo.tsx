import styles from "../gallery.module.scss";

function GalleryInfo() {
  return (
    <section className={styles.info}>
      <div className={styles.info_container}>
        <h2 className={styles.info_title}>
          Прошла путь от ассистента до HR Advisor
        </h2>
        <div className={styles.info_cards}>
          <div className={styles.info_card}>
            <p className={styles.info_subtitle}>HR консультант</p>
            <p className={styles.info_text}>
              Последние 10 лет провела консультации в разных сферах: в
              финансовом стартапе, в продуктовых компаниях по софтам для
              инфобизнеса, в активном найме в команды продукта Platformeco
              (low-code SAAS product), в IT интеграторе , в стройке в IT, по
              ботам
            </p>
          </div>
          <div className={styles.info_card}>
            <p className={styles.info_subtitle}>HR внутри компании</p>
            <p className={styles.info_text}>
              Имею большой опыт в выстраивании найма в КЦ и удаленной службе
              поддержки, онбординге, автоматизации (внедряла ATS, ставила
              эксперименты с чат-ботами), HR-бренд, devrel, EVP, HR -
              администрирование в полном объеме. Работала с разными компаниями
              GetCourse, Leroy Merlin IT.
            </p>
          </div>
          <div className={styles.info_card}>
            <p className={styles.info_subtitle}>Рекрут</p>
            <p className={styles.info_text}>
              В Softline Company полгода выполняла роль лида подбора работала,
              другие HR-активности. Сопровождала продуктовые стримы
            </p>
          </div>
          <div className={styles.info_card}>
            <p className={styles.info_subtitle}>HR партнер</p>
            <p className={styles.info_text}>
              Сейчас стала бизнес партнером в Rubetek. Понимаю потребности
              бизнеса и знаю, как решать его задачи с помощью HR-инструментов.
              Выстраиваю стратегии подбора персонала и обучения.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default GalleryInfo;
