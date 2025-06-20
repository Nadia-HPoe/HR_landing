import styles from "./info.module.scss";

function Info() {
  return (
    <section className={styles.info}>
      <div className={styles.info_banner}>
        <p className={styles.info_paragraph}>
          "Нахожу нетиповые решения и верю,
          <br /> что тупиковых ситуаций не бывает"
        </p>
      </div>
      <div className={styles.info_content}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Ко мне обращаются в ситуациях: </h2>
          <div className={styles.list}>
            <div className={styles.list_item}>
              <span>1</span>
              <p> рекомендации по улучшению управлении персоналом</p>
            </div>
            <div className={styles.list_item}>
              <span>2</span> <p>массового оттока сотрудников</p>
            </div>
            <div className={styles.list_item}>
              <span>3</span> <p>сложности с подбором персонала</p>
            </div>
            <div className={styles.list_item}>
              <span>4</span> <p>падения продуктивности среди коллектива</p>
            </div>
            <div className={styles.list_item}>
              <span>5</span> <p>создания hr отделов под расширение штата</p>
            </div>
            <div className={styles.list_item}>
              <span>6</span> <p>обучения hr-менеджеров по персоналу</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Info;
