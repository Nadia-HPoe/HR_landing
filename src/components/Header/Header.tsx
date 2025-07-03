import styles from "./header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <p className={styles.logo_text}>Евгения Орлова</p>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.nav_item}>
            <a className={styles.nav_item_link} href='#for'>
              Для кого
            </a>
          </li>
          <li className={styles.nav_item}>
            <a className={styles.nav_item_link} href='#about'>
              Обо мне
            </a>
          </li>
          <li className={styles.nav_item}>
            <a className={styles.nav_item_link} href='#service'>
              Услуги
            </a>
          </li>
          <li className={styles.nav_item}>
            <a className={styles.nav_item_link} href='#review'>
              Отзывы
            </a>
          </li>
          <li className={styles.nav_item}>
            <a className={styles.nav_item_link} href='#faq'>
              FAQ
            </a>
          </li>
          <li className={styles.nav_item}>
            <a className={styles.nav_item_link} href='#contact'>
              Контакты
            </a>
          </li>
        </ul>
      </nav>
      <div className={styles.contact}>
        <p className={styles.phone}> +7 (925) 371 01 30</p>
        <a
          href='https://2meetup.in/evgeniiaorlova/meet'
          className={styles.button}
        >
          Консультация
        </a>
      </div>
    </header>
  );
}
export default Header;
