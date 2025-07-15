import Title from "../../Title/Title";
import styles from "../gallery.module.scss";

function GalleryInfo() {
  return (
    <section className={styles.info}>
      <div className={styles.info_container}>
        <Title title='Прошла путь от ассистента до HR Advisor' />
        <div className={styles.info_cards}>
          <div className={styles.info_card}>
            <p className={styles.info_subtitle}>HR консультант</p>
            <p className={styles.info_text}>
              Последние 11 лет провела более 50 консультаций в разных сферах:
              как для стартапов HR Tech, так и корпорациям (стройка, рынок
              онлайн-обучения, медицина, ритейл и пр.)
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
            <p className={styles.info_subtitle}>Рекрутер</p>
            <p className={styles.info_text}>
              В Softline помогала в закрытии сложных позиций, в АТОЛ выполняла
              роль лида подбора работала, проводила другие HR-активности и
              цифротизировала найм. Сопровождала продуктовые отдела и работала с
              HR-аналитикой.
            </p>
          </div>
          <div className={styles.info_card}>
            <p className={styles.info_subtitle}>HR партнер</p>
            <p className={styles.info_text}>
              Была бизнес-партнером компаний Rubetek и Geomix. Понимаю
              потребности бизнеса и знаю, как решать его задачи с помощью
              HR-инструментов. Выстраиваю устойчивые масштабируемые стратегии
              управления персоналом, приносящие прибыль. Являюсь антикризисным
              менеджером и оптимизирую штат.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default GalleryInfo;
