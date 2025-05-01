import React from "react";
import styles from "./Department.module.css";

const staff = [
  {
    name: "Hikmət Musayev",
    title: "Tələbə, məzunlarla iş və karyera şöbəsinin müdiri",
    img: "/hikmetM.jpg",
  },
  {
    name: "Leyla Nurullayeva",
    title: "Tələbə, məzunlarla iş və karyera şöbəsinin aparıcı mütəxəssisi",
    img: "/leylaM.png",
  },
  {
    name: "Fatimə Allahverdiyeva",
    title: "Tələbə, məzunlarla iş və karyera şöbəsinin mütəxəssisi",
    img: "/fatime.jpg",
  },
];

function Department() {
  return (
    <div className={styles.container}>
      <section className={styles.intro}>
        <h2>Şöbə haqqında</h2>
        <p>
          Tələbə, məzunlarla iş və karyera şöbəsi tələbələrin və məzunların
          təhsil sonrası uğurlu karyera qurmasını dəstəkləyir. Şöbə, karyera
          planlaması, təcrübə proqramları, və iş imkanları haqqında məsləhətlər
          təqdim edir.
        </p>
      </section>

      <section className={styles.staffGrid}>
        {staff.map((person, index) => (
          <div className={styles.card} key={index}>
            <img src={person.img} alt={person.name} />
            <h4>{person.name}</h4>
            <p>{person.title}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Department;
