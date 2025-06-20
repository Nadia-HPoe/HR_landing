import styles from "./header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <p className={styles.logo_text}>Евгения Орлова</p>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.nav_item}>Для кого</li>
          <li className={styles.nav_item}>Обо мне</li>
          <li className={styles.nav_item}>Услуги</li>
          <li className={styles.nav_item}>Отзывы</li>
          <li className={styles.nav_item}>FAQ</li>
          <li className={styles.nav_item}>Контакты</li>
        </ul>
      </nav>
      <div className={styles.contact}>
        <p className={styles.phone}> +7 (903) 018 24 84</p>
        <button className={styles.button}>Консультация</button>
      </div>
    </header>
  );
}
export default Header;
