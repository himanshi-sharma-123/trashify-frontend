import React from "react";
import styles from "./About.module.css";
import image from "../../images/hero1.png";
const About = () => {
  return (
    <div name="about" className={styles.about}>
      <div className={styles.heading}>
        <h1>
          {" "}
          Power up to save the <span className={styles.sp}>environment</span>
        </h1>

        <div className={styles.text_bg}>
          <p>
            <span>Reduce. Reuse. Recycle</span>
          </p>
        </div>
      </div>

      {/* <div className={styles.left}>
        {" "}
        <img src={image} alt="" />
      </div> */}
    </div>
  );
};

export default About;
