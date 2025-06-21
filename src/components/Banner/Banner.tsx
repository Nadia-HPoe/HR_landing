import styles from "./banner.module.scss";
import MainPhoto from "../../assets/images/main_img2.jpg";

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
          <button className={styles.button}>записаться на КОНСУЛЬТАЦИЮ</button>
        </div>
        <div className={styles.image_container}>
          <img className={styles.image} src={MainPhoto} alt='MainPhoto' />
        </div>
      </div>
    </section>
  );
}
export default Banner;
