import React from "react";
import styles from "./Elaqe.module.css";

const xidmetler = [
  {
    title: "Tələbə və Müəllim Mübadiləsi",
    desc: "Xarici universitetlərlə əməkdaşlıq çərçivəsində tələbə və müəllimlərin mübadilə proqramlarını təşkil etmək.",
    img: "/xidmet1.png",
  },
  {
    title: "Xaricdə Təhsil İmkanları",
    desc: "Tələbə və müəllimlərə xaricdə təhsil, təcrübə və tədqiqat imkanları yaratmaq və bu proseslərdə dəstək olmaq.",
    img: "/xidmet2.png",
  },
  {
    title: "Beynəlxalq Tərəfdaşlıqların İnkişafı",
    desc: "Xarici ali təhsil müəssisələri ilə əməkdaşlıq əlaqələrini genişləndirmək.",
    img: "/xidmet3.jpg",
  },
  {
    title: "İkili Diplom Proqramları",
    desc: "Xarici universitetlərlə ikili diplom proqramları yaradaraq tələbələrə iki dərəcə imkanı yaratmaq.",
    img: "/xidmet4.jpg",
  },
  {
    title: "Beynəlxalq Tələbə Dəstəyi",
    desc: "Xarici tələbələrin universitetə inteqrasiyasını təmin etmək və dəstək göstərmək.",
    img: "/xidmet5.jpg",
  },
];

const Elaqe = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <section className={styles.about}>
          <h2>Şöbə haqqında</h2>
          <p>
          Beynəlxalq əlaqələr şöbəsi xarici universitetlər və təhsil müəssisələri ilə əməkdaşlıq qurmaq və tələbələr üçün beynəlxalq təcrübə imkanları yaratmaq məqsədi daşıyır. Şöbə xaricdə təhsil proqramları, mübadilə proqramları və ikili diplom layihələri vasitəsilə tələbələrin qlobal təcrübələr qazanmasına şərait yaradır. Həmçinin, şöbə xarici tələbələrin qəbulunu və onların universitetə inteqrasiyasını asanlaşdıraraq, mədəni mübadilə üçün zəngin bir mühit yaradır. Beynəlxalq əlaqələr şöbəsi beynəlxalq tədbirlər, konfranslar və seminarlar təşkil edərək universitetin beynəlxalq nüfuzunu artırır. Bu şöbə sayəsində tələbə və müəllimlər xaricdə təhsil və tədqiqat imkanlarından yararlanaraq akademik dairələrdə təcrübə və bilik mübadiləsi aparırlar.
          </p>
        </section>

        <section className={styles.staff}>
          <div className={styles.emekdasCard}>
            <img src="/emekdas1.jpg" alt="Dünya Əhədova" />
            <h4>Dünya Əhədova</h4>
            <p>Beynəlxalq əlaqələr şöbəsinin baş mütəxəssisi</p>
          </div>
        </section>
      </div>

      <section className={styles.services}>
        <h2>Xidmətlərimiz</h2>
        <ul>
          {xidmetler.map((xidmet, index) => (
            <li key={index} className={styles.card}>
              <img src={xidmet.img} alt={xidmet.title} />
              <div>
                <h4>{xidmet.title}</h4>
                <p>{xidmet.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Elaqe;
