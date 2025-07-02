import styles from "../gallery.module.scss";

function GalleryBanner() {
  return (
    <section className={styles.banner}>
      <div className={styles.banner_container}>
        <div className={styles.banner_card}>
          <p className={styles.banner_number}>13</p>
          <p className={styles.banner_text}>лет в HR-службе</p>
        </div>
        <div className={styles.banner_card}>
          <p className={styles.banner_number}>5+</p>
          <p className={styles.banner_text}>лет в IT HR</p>
        </div>
        <div className={styles.banner_card}>
          <p className={styles.banner_number}>7+</p>
          <p className={styles.banner_text}>команд, которые принесли прибыль</p>
        </div>
      </div>
    </section>
  );
}
export default GalleryBanner;
