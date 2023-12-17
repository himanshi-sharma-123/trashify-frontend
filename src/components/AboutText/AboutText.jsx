import React from "react";
import image from "../../images/hero1.png";
import styles from "./AboutText.module.css";

const AboutText = () => {
  return (
    <div className={styles.text}>
      <div className={styles.left}>
        <img src={image} alt="" />
      </div>
      <div className={styles.para}>
        <p className={styles.parag}>
          Our website serves as a hub for individuals, municipalities,
          businesses, and environmentalist alike, offering a comprehensive suite
          of tools and insights to tackle these pressing concerns. Through the
          lens of AI, we aim to provide a dynamic and adaptable solution that
          evolves with the changing waste landscape. From real-time monitoring
          of waste flows to predictive models that anticipate trends in waste
          generation.
        </p>
      </div>
    </div>
  );
};

export default AboutText;
