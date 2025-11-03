import styles from './header.module.css'

export default function Header() {
  return (
    <header className={styles.siteHeader}>
      <div className={`${styles.wrapper} ${styles.siteHeaderWrapper}`}>
        <div className={styles.siteHeaderStart}>
          <a href="#" className={styles.brand}>Brand</a>
        </div>
        <div className={styles.siteHeaderMiddle}>
          <nav className={styles.nav}>
            <button className={styles.navToggle} aria-expanded="false" type="button">
              menu
            </button>
            <ul className={styles.navWrapper}>
              <li className={styles.navItem}><a href="/">Home</a></li>
              <li className={styles.navItem}><a href="/histories">History</a></li>
              <li className={styles.navItem}><a href="#">About</a></li>
              <li className={styles.navItem}><a href="#">Services</a></li>
              <li className={styles.navItem}><a href="/inquires">お問い合わせ</a></li>
            </ul>
          </nav>
        </div>
        <div className={styles.siteHeaderEnd}>
          <a className={styles.button} href="#">Sign in</a>
        </div>
      </div>
    </header>
  );
}