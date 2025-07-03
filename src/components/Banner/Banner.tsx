import styles from "./banner.module.scss";
import Image from "../../assets/images/main_img.png";

function Banner() {
  return (
    <section className={styles.banner}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h1 className={styles.title}>HR на аутсорсе под ключ</h1>
          <p className={styles.text}>
            Помогаю исцелять компании <br />
            для эффективного управления своего
            <br /> персонала в сферах sale, marketing, IT
          </p>
          <a
            href='https://2meetup.in/evgeniiaorlova/meet'
            className={styles.button}
          >
            записаться на КОНСУЛЬТАЦИЮ
          </a>
        </div>
        <div className={styles.image_container}>
          <img className={styles.image} src={Image} alt='MainPhoto' />
        </div>
      </div>
    </section>
  );
}
export default Banner;
