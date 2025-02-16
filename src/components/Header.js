import React from 'react';
import styles from './Header.module.css';
import Logo from '../assets/icons/Vector.png';
import Hamburger from '../assets/icons/Hamburger.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          <div className={styles.mobileHeader}>
            <div className={styles.leftSection}>
              <img src={Logo} alt="Logo" className={styles.logo} />
              <span className={styles.brandName}>Central Texas Fly Fishing</span>
            </div>
            <img src={Hamburger} alt="Menu" className={styles.hamburger} />
          </div>
          <nav className={styles.nav}>
            <a href="/" className={styles.navLink}>Home</a>
            <a href="/about" className={styles.navLink}>About us</a>
            <a href="/services" className={styles.navLink}>Services</a>
            <a href="/contact" className={styles.navLink}>Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 