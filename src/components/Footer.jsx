import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { LuMapPinned } from "react-icons/lu";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerSection}>
        <h5 className={styles.footerTitle}>Bizimlə Əlaqə</h5>
        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <LuMapPinned size={24} />
            <div>
              <p>Ünvan</p>
              <span>Quba şəhəri, Lütfi Zadə küç.4 / Azerbaijan - Guba</span>
            </div>
          </div>
          <div className={styles.contactItem}>
            <FaPhoneVolume size={24} />
            <div>
              <p>Telefon</p>
              <span>+994 23 335 20 92</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerSection}>
        <h5 className={styles.footerTitle}>Bizi Sosial Şəbəkələrdə izləyin</h5>
        <div className={styles.socialIcons}>
          <a href="...">
            <img src="/facebook_icon.svg" />
          </a>
          <a href="...">
            <img src="/insta.svg" />
          </a>
          <a href="...">
            <img src="/youtube.svg" />
          </a>
          <a href="...">
            <img src="/wp.svg" />
          </a>
          <a href="...">
            <img src="/telegram.svg" />
          </a>
          <a href="...">
            <img src="/web.svg" />
          </a>
        </div>
      </div>
      <div className={styles.footerSection}>
        <h5 className={styles.footerTitle}>Xəritə</h5>
        <div className="mapContainer">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5989.314415220373!2d48.497951!3d41.359804!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403795e3bab771cf%3A0xe1677c9a505e668a!2sAz%C9%99rbaycan%20D%C3%B6vl%C9%99t%20Pedaqoji%20Universitetinin%20Quba%20filial%C4%B1!5e0!3m2!1sru!2saz!4v1746127239689!5m2!1sru!2saz"
            width="100%"
            height="100%"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Footer;
