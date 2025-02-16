import React from 'react';
import styles from './Footer.module.css';
import Logo from '../assets/icons/Logo.png';
import FacebookIcon from '../assets/icons/facebook.svg';
import InstagramIcon from '../assets/icons/instagram.svg';
import LinkedInIcon from '../assets/icons/linkedin.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.leftSection}>
            <img src={Logo} alt="Logo" className={styles.logo} />
            <nav className={styles.nav}>
              <a href="/faq" className={styles.navLink}>FAQ</a>
              <a href="/privacy" className={styles.navLink}>Privacy</a>
              <a href="/support" className={styles.navLink}>Support</a>
              <a href="/contact" className={styles.navLink}>Contact</a>
            </nav>
          </div>
          <div className={styles.socialLinks}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={FacebookIcon} alt="Facebook" className={styles.socialIcon} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={InstagramIcon} alt="Instagram" className={styles.socialIcon} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={LinkedInIcon} alt="LinkedIn" className={styles.socialIcon} />
            </a>
          </div>
        </div>
        <div className={styles.copyright}>
          © 2024 Central Texas Fly Fishing All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer; 