import Title from "../Title/Title";
import styles from "./format.module.scss";

function Format() {
  return (
    <section className={styles.format}>
      <Title title='Формат работы' />
      <div className={styles.container}>
        <div className={styles.block_left}>
          <div className={styles.marker}></div>
          <div className={styles.content}>
            <h3>Вводная платная консультация</h3>
            <p>
              Мы обсуждаем ваш кейс, алгоритм
              <br /> решения вашей боли и обсуждаем
              <br /> стоимость услуг
            </p>
          </div>
        </div>

        <div className={styles.block_right}>
          <div className={styles.marker}></div>
          <div className={styles.content}>
            <h3>Обсуждаем бриф</h3>
            <p>Вы заполняете бриф и созваниваемся</p>
          </div>
        </div>

        <div className={styles.block_left}>
          <div className={styles.marker}></div>
          <div className={styles.content}>
            <h3>Подписываем договор оферты</h3>
          </div>
        </div>

        <div className={styles.block_right}>
          <div className={styles.marker}></div>
          <div className={styles.content}>
            <h3>Разрабатываю стратегию</h3>
            <p>
              Под вашу задачу создаю индивидуальную
              <br /> стратегию и внедряю ее
            </p>
          </div>
        </div>

        <div className={styles.block_left}>
          <div className={styles.marker}></div>
          <div className={styles.content}>
            <h3>Результат</h3>
            <p>
              Вы получаете готовое решение <br />
              !своей проблемы
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Format;
