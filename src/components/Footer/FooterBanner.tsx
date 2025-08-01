import styles from "./footer.module.scss";

function FooterBanner() {
  return (
    <section className={styles.banner} id='contact'>
      <div className={styles.banner_wrapper}>
        <div className={styles.banner_text}>
          <h4 className={styles.banner_title}>Остались вопросы?</h4>
          <p className={styles.banner_paragraph}>
            Приглашаю вас на платную консультацию
          </p>
        </div>
        <a
          href='https://2meetup.in/orlovatech'
          className={styles.banner_button}
        >
          записаться
        </a>
      </div>
    </section>
  );
}
export default FooterBanner;
