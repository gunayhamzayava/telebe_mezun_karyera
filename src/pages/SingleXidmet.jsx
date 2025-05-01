import React from "react";
import { useParams } from "react-router-dom";
import styles from "./SingleXidmet.module.css";
import { services } from "./Xidmetler";

function SingleXidmet() {
  const { id } = useParams();
  const service = services.find((item) => item.id === parseInt(id));
  return (
    <div className={styles.singleService}>
      <h2>{service.name}</h2>
      <img src={service.image} alt={service.name} />
      <p>{service.description}</p>
    </div>
  );
}

export default SingleXidmet;
