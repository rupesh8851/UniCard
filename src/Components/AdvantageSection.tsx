import React from "react";
import styles from "../styles/Advantages.module.css";
import { GenericProps } from "../Commons/types";

const Advantages = (props: GenericProps) => {
  const { src, text, width, height } = props;
  const textArr = text.split("|");

  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.textContainer}>
          {textArr[0]} {"\n"}
          <span>{textArr[1]}</span>
        </div>
        <div className={styles.decscription}>{textArr[2]}</div>
      </div>
      <div className={styles.rightContainer}>
        <img src={src} width={width} height={height} alt="Uni Cards" />
      </div>
    </div>
  );
};

export default Advantages;
