import { useState } from "react";
import styles from "./header.module.scss";

type MenuItem = {
  label: string;
  targetId: string;
};
const menu: MenuItem[] = [
  { label: "Для кого", targetId: "for" },
  { label: "Обо мне", targetId: "about" },
  { label: "Услуги", targetId: "service" },
  { label: "Отзывы", targetId: "review" },
  { label: "FAQ", targetId: "faq" },
  { label: "Контакты", targetId: "contact" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -50;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <p className={styles.logo_text}>Евгения Орлова</p>
      </div>
      <button
        className={`${styles.burger} ${menuOpen ? styles.open : ""}`}
        aria-label='Toggle menu'
        aria-expanded={menuOpen}
        onClick={toggleMenu}
        type='button'
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>
      <nav className={`${styles.nav} ${menuOpen ? styles.nav_open : ""}`}>
        <ul className={styles.list}>
          {menu.map((item) => (
            <li
              className={styles.nav_item}
              key={item.targetId}
              onClick={closeMenu}
            >
              <a
                className={styles.nav_item_link}
                key={item.targetId}
                onClick={() => handleScroll(item.targetId)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className={styles.contact_mobile}>
          <p className={styles.phone}> +7 (925) 371 01 30</p>
          <a href='tel:+79253710130' className={styles.phone_nobile}>
            {" "}
            +7 (925) 371 01 30
          </a>
          <a
            href='https://2meetup.in/evgeniiaorlova/meet'
            className={styles.button}
          >
            Консультация
          </a>
        </div>
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
