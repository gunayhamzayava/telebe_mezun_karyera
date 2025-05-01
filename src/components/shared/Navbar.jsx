import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // İkon üçün lucide-react paketi (və ya istədiyin ikon kitabxanası)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

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

          <div className={styles.hamburger} onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </div>

          <ul className={`${styles.navLinks} ${isOpen ? styles.showMenu : ""}`}>
            <li>
              <NavLink
                to="/department"
                onClick={toggleMenu}
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
                onClick={toggleMenu}
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
                onClick={toggleMenu}
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
                onClick={toggleMenu}
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
