import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img src="/logo.png" alt="Logo" className={styles.logoImg} />
        <span className={styles.logoText}>
          Tələbə, Məzunlarla İş və Karyera Şöbəsi
        </span>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <a href="#">Xidmətlərimiz</a>
        </li>
        <li>
          <a href="#">Beynəlxalq əlaqələr</a>
        </li>
        <li>
          <a href="#">Karyera planlaması</a>
        </li>
        <li>
          <a href="#">Tədbirlər</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
