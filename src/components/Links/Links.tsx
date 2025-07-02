import Title from "../Title/Title";
import styles from "./links.module.scss";
import TG from "../../assets/images/telegram.png";
import Bot from "../../assets/images/bot.png";

function Links() {
  return (
    <section className={styles.links}>
      <Title title='Полезные материалы' />
      <div className={styles.container}>
        <div className={styles.block_links}>
          <div className={styles.links_wrapper}>
            <h4 className={styles.links_title}>Видео</h4>
            <p className={styles.links_item}>
              По запросу{" "}
              <a className={styles.link} href='https://t.me/HR_OrlovaEV'>
                +79253710130
              </a>
            </p>
          </div>
          <div className={styles.links_wrapper}>
            <h4 className={styles.links_title}>Статьи</h4>
            <a
              href='https://hightech.plus/2023/09/07/poleznii-hr-tech-vibiraem-po-dlya-avtomatizacii-rekrutinga'
              className={styles.link}
              target='blank'
            >
              Полезный HR-Tech: выбираем ПО для автоматизации рекрутинга
            </a>
          </div>
          <div></div>
        </div>
        <div className={styles.block_social}>
          <div className={styles.social_tg}>
            <div className={styles.social_item}>
              <img src={TG} alt='' />
              <a
                className={styles.link}
                href='https://t.me/HR_podpiska'
                target='blank'
              >
                авторский канал HR BP и HR Advisor о буднях, инсайтах и мыслях
              </a>
            </div>
            <div className={styles.social_item}>
              <img src={TG} alt='' />
              <a
                className={styles.link}
                href='https://t.me/orlova_reccomendation'
                target='blank'
              >
                закрытый канал с резюме
              </a>
            </div>
          </div>
          <div className={styles.social_bot}>
            <div className={styles.social_item}>
              <img src={Bot} alt='' />
              <a
                className={styles.link}
                href='https://001smiling.github.io/Valerchik/'
                target='blank'
              >
                бот для поиска работы
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Links;
