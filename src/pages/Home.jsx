import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <main className={styles.homeMain}>
        <h1>ADPU-nun Quba filialı</h1>

        <div className={styles.aboutWrapper}>
          <section className={styles.aboutCard}>
            <h5>Filialın tarixi</h5>
            <div className={styles.homeImg}>
              <img src="/adpu.jpg" alt="ADPU" />
            </div>
            <p>
              ADPU-nun Quba filialı 2000-ci ildə yaradılmış və minlərlə kadr
              hazırlamışdır. Universitet geniş tədris sahəsinə malikdir.
              <br />
              <Link to="/adpu" className={styles.readMore}>
                Ətraflı oxu
              </Link>
            </p>
          </section>

          <section className={styles.aboutCard}>
            <h5>Rəhbərlik</h5>
            <div className={styles.homeImg}>
              <img src="/yusifAliyev.jpeg" alt="Yusif Alıyev" />
            </div>
            <p>
              Yusif Alıyev – fizika üzrə elmlər namizədi, 2009-cu ildən fəal
              elmi-pedaqoji fəaliyyət göstərir.
              <br />
              <Link to="/rehberlik" className={styles.readMore}>
                Ətraflı oxu
              </Link>
            </p>
          </section>
        </div>

        <section className={styles.ixtisaslar}>
          <h5>İxtisaslar</h5>
          <ul>
            <li>"Azərbaycan dili müəllimliyi" – 4 il</li>
            <li>"Sosial iş" – 4 il</li>
            <li>"Xarici dil (İngilis dili) müəllimliyi" – 4 il</li>
            <li>"Tarix və coğrafiya müəllimliyi" – 5 il</li>
            <li>"Təhsildə sosial-psixoloji xidmət" – 4 il</li>
            <li>"İbtidai sinif müəllimliyi" – 4 il</li>
            <li>"Riyaziyyat və informatika müəllimliyi" – 5 il</li>
            <li>"Məktəbəqədər təlim və tərbiyə" – 4 il</li>
            <li>"Tarix müəllimliyi" – 4 il</li>
            <li>"Coğrafiya müəllimliyi" – 4 il</li>
            <li>"Riyaziyyat müəllimliyi" – 4 il</li>
          </ul>
        </section>

        <section className={styles.mezun}>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSduHdfZ8lFLiRhs-Ot3HJbybqLdXxGkRCN76zlpWL9UyGG1vA/viewform">
            Məzunların məmnunluq sorğusu
          </a>
          <p>
            ADPU-nun Quba filialının Tələbə, məzunlarla iş və karyera şöbəsi
            məzunlarla əlaqələrin gücləndirilməsi məqsədilə mütəmadi olaraq
            məmnunluq sorğuları həyata keçirir. Bu sorğular vasitəsilə
            məzunların təhsil müddətinə, ixtisaslarının əmək bazarına
            uyğunluğuna və göstərilən karyera xidmətlərinə dair fikirləri
            öyrənilir. Əldə olunan nəticələr şöbənin fəaliyyətinin
            təkmilləşdirilməsi və tələbə-məzun ehtiyaclarına uyğun
            strategiyaların hazırlanması üçün əsas rol oynayır.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Home;
