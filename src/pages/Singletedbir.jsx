import React from "react";
import { useParams } from "react-router-dom";
import styles from "./Singletedbir.module.css";
import { events } from "./Tedbirler";

function Singletedbir() {
  const { id } = useParams();
  const event = events.find((item) => item.id === parseInt(id));
  return (
    <div className={styles.singleService}>
      <h3>{event.title}</h3>
      <img src={`/${event.image}`} />
      <p>{event.description}</p>
    </div>
  );
}

export default Singletedbir;
