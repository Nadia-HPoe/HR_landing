import styles from "./about.module.scss";
import Image from "../../assets/images/aboutme_img.jpg";
import Title from "../Title/Title";

function About() {
  return (
    <section className={styles.about} id='about'>
      <Title title='Обо мне' />

      <h3 className={styles.subtitle}>
        HR лекарь, верю в devrel и делаю HR Tech для людей от HR
      </h3>
      <div className={styles.about_container}>
        <div className={styles.image_wrapper}>
          <img className={styles.image} src={Image} alt='AboutMePhoto'></img>
        </div>
        <div className={styles.about_wrapper}>
          <div>
            <img
              className={styles.image_mobile}
              src={Image}
              alt='AboutMePhoto'
            ></img>
            <p className={styles.about_paragraph}>
              <span>Евгения Орлова</span> – HR Advisor, с 19 лет работаю в
              корпорациях и стартапах. Закончила СмолГУ (Смоленский
              Государственный Университет) по специальности История и
              Юриспруденция, в 23 года получила переподготовку с начальной
              степенью MBA в сфере управления персоналом при МГУ им. Ломоносова
              и продолжила свое обучение в части управления персоналом,
              маркетинга и IT-технологий. Хэдхантер, организатор и мама. Помогаю
              встретиться крутым компаниям и талантам.
            </p>
          </div>
          <p className={styles.about_subtitle}>
            Прошла путь от ассистента до HR Advisor
          </p>
          <ul className={styles.about_list}>
            <span>Мои сильные стороны:</span>

            <li className={styles.about_list_item}>HR автоматизация</li>
            <li className={styles.about_list_item}>Кадровая безопасность</li>
            <li className={styles.about_list_item}>
              HR процессы (построение и реинжиниринг)
            </li>
            <li className={styles.about_list_item}>Headhunting</li>
            <li className={styles.about_list_item}>HR marketing</li>
            <li className={styles.about_list_item}>Delivery Recruitment</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default About;
