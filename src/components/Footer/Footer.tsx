import styles from "./footer.module.scss";
import FooterBanner from "./FooterBanner";
import TG from "../../assets/images/telegram.png";
import WA from "../../assets/images/whatsapp.png";
import Bot from "../../assets/images/bot.png";
import Link from "../../assets/images/linkedin.png";
import Habr from "../../assets/images/habr.png";
import Meet from "../../assets/images/meetup.png";
import Teen from "../../assets/images/teenchat.png";

function Footer() {
  return (
    <footer className={styles.footer}>
      <FooterBanner />
      <section className={styles.container}>
        <div className={styles.contacts}>
          <div className={styles.contact_item}>
            <div className={styles.contact_item_wrapper}>
              <a href='https://wa.me/79253710130' target='blank'>
                <img src={WA} alt='' className={styles.contact_icon} />
              </a>
              <a href='https://t.me/EvgeniiaOrlova' target='blank'>
                {" "}
                <img src={TG} alt='' className={styles.contact_icon} />
              </a>
              <div className={styles.contact_wrapper}>
                <p className={styles.contact_phone}>+7 (925) 371 01 30</p>
                <p className={styles.contact_text2}>
                  Поддержка и сопровождение
                </p>
              </div>
            </div>
            <p className={styles.contact_paragraph}>
              Работаю в удаленном формате по РФ
            </p>
          </div>
          <div className={styles.contact_item}>
            <a
              href='https://t.me/HR_podpiska'
              target='blank'
              className={styles.contact_link}
            >
              <img src={TG} alt='' className={styles.contact_icon} />
              <p className={styles.contact_text}>
                авторский канал HR BP и HR Advisor о буднях, инсайтах и мыслях
              </p>
            </a>

            <a
              href='https://t.me/EvgeniiaOrlova'
              target='blank'
              className={styles.contact_link}
            >
              <img src={TG} alt='' className={styles.contact_icon} />
              <p className={styles.contact_text}>
                закрытый канал с резюме - по запросу
              </p>
            </a>
          </div>
          <div className={styles.contact_item}>
            <a
              href='https://001smiling.github.io/Valerchik/'
              className={styles.contact_link}
            >
              <img src={Bot} alt='' className={styles.contact_icon} />
              <p className={styles.contact_text}>бот для поиска работы</p>
            </a>
            <div className={styles.contact_item_wrapper}>
              <a
                href='https://tenchat.ru/evgeniaOrlova?utm_source=94da7879-c200-45b8-9d3b-7596a95bd6cbhttps://tenchat.ru/0225905?utm_source=94da7879-c200-45b8-9d3b-7596a95bd6cb'
                target='blank'
                className={styles.contact_link}
              >
                <img src={Teen} alt='' />
              </a>
              <a
                href='https://2meetup.in/evgeniiaorlova'
                target='blank'
                className={styles.contact_link}
              >
                <img src={Meet} alt='' />
              </a>
              <a
                href='https://linkedin.com/in/eorlova67'
                target='blank'
                className={styles.contact_link}
              >
                <img src={Link} alt='' />
              </a>
              <a
                href='https://career.habr.com/orlovatech'
                target='blank'
                className={styles.contact_link}
              >
                <img src={Habr} alt='' />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.rights}>
          <p className={styles.rights_text}>Все права защищены © 2025</p>
          <div>
            <p className={styles.rights_text}>Дизайн сайта - АЛЕКА</p>
            <p className={styles.rights_text}>
              Разработка -{" "}
              <a
                className={styles.rights_link}
                href='https://github.com/Nadia-HPoe'
                target='blank'
              >
                Szabó Nadia
              </a>
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
}
export default Footer;
