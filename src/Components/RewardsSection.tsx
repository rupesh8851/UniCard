import React from "react";
import styles from "../styles/RewardStyles.module.css";
import { inherits } from "util";
import { GenericProps } from "../Commons/types";

interface RewardsSectionProps extends GenericProps {
  isReversed?: boolean;
}

const RewardsSection = (props: RewardsSectionProps) => {
  const { text, src, isReversed = false, width, height } = props;
  const textArr = text.split("|");
  return (
    <div className={isReversed ? styles.containerReversed : styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.text}>
          <strong>{textArr[0]}</strong>
          {textArr[1]}
        </div>
      </div>
      <div className={styles.rightContainer}>
        <img src={src} width={width} height={height} alt="Uni Cards" />
      </div>
    </div>
  );
};

export default RewardsSection;
