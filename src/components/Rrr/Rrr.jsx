import React from "react";
import image from "../../images/hero1.png";
import styles from "./Rrr.module.css";

const Rrr = () => {
  return (
    <div className={styles.text}>
      <div className={styles.left}>
        <img src={image} alt="" />
      </div>
      <div className={styles.para}>
        <p className={styles.parag}>
          In order to keep as much material out of the landfill as possible,
          it’s important for each of us to do our part. One of the ways to put
          that plan into action is through the 3 Rs of waste management —
          <span className={styles.r}> Reduce, Reuse, Recycle. </span>
        </p>
        <ol className={styles.list}>
          <li>Reduce means to cut back on the amount of trash we generate.</li>
          <li>
            Reuse means to find new ways to use things that otherwise would have
            been thrown out.
          </li>
          <li>
            Recycle means to turn something old and useless (like plastic milk
            jugs) into something new and useful (like picnic benches, playground
            equipment and recycling bins).
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Rrr;
