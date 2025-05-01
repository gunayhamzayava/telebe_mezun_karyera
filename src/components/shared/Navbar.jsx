import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.cont_nav}>
      <div className={styles.container}>
        <nav className={styles.navbar}>
          <div className={styles.logoContainer}>
            <NavLink to="/">
              <img src="/logo.png" alt="Logo" className={styles.logoImg} />
            </NavLink>
            <span className={styles.logoText}>
              Tələbə, Məzunlarla İş və Karyera
            </span>
          </div>
          <ul className={styles.navLinks}>
            <li>
              <NavLink
                to="/department"
                className={({ isActive }) =>
                  isActive ? styles.activeLink : styles.link
                }
              >
                Şöbəmiz
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/service"
                className={({ isActive }) =>
                  isActive ? styles.activeLink : styles.link
                }
              >
                Xidmətlərimiz
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/conference"
                className={({ isActive }) =>
                  isActive ? styles.activeLink : styles.link
                }
              >
                Tədbirlər
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/relations"
                className={({ isActive }) =>
                  isActive ? styles.activeLink : styles.link
                }
              >
                Beynəlxalq Əlaqələr
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
