import React from "react";
import { GenericProps } from "../Commons/types";
import styles from "../styles/Benefits.module.css";

export default function Benefits(props: GenericProps) {
  const { text, src, width, height } = props;
  const textArr = text.split("|");
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={src} width={width} height={height} alt="unicards" />
      </div>
      <div className={styles.primaryText}>{textArr[0]}</div>
      <div className={styles.secondaryText}>
        {textArr[1][0] === "/" ? (
          <img src={textArr[1]} width={84} height={33} alt="unicards" />
        ) : (
          textArr[1]
        )}
      </div>
    </div>
  );
}
