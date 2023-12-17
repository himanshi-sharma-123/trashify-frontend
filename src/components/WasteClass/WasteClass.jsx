import React from "react";
import styles from "./WasteClass.module.css";
import table from "../../images/table.png";
const WasteClass = () => {
  return (
    <div className={styles.text}>
      <div className={styles.para}>
        <p className={styles.parag}>
          Waste Classification mainly occurs on the basis of their biological,
          chemical and physical properties and also on the basis of nature. For
          the purposes of segregation at source, waste is classified in to the
          following categories:{" "}
        </p>
        <ol className={styles.list}>
          <li>
            <span className={styles.heading}>Dry Waste – </span>Refers to all
            items that are not considered wet/soiled items. This includes both
            recyclable and non-recyclable materials. Dry waste includes items
            such as bottles, cans, clothing, plastic, wood, glass, metals and
            paper.
          </li>
          <li>
            <span className={styles.heading}>Wet Waste – </span>Refers to all
            items that are organic like food items, soiled food wrappers,
            hygiene products, yard waste, tissues and paper towels, as well as
            any other soiled item that would contaminate the recyclables.
          </li>
          <li>
            <span className={styles.heading}>Sanitary Waste – </span>Refers to
            all liquid or solid waste originating solely from humans and human
            activities. (Can also include items from medical waste)
          </li>
          <li>
            <span className={styles.heading}>
              {" "}
              Hazardous Household Waste –{" "}
            </span>
            Refers to all household products that contain corrosive, toxic,
            ignitable, or reactive ingredients, other than used oil.
          </li>
          <li>
            <span className={styles.heading}>E-Waste – </span>Refers to all
            kinds of electronic waste.
          </li>
        </ol>
      </div>
      <div className={styles.left}>
        <img src={table} alt="" />
      </div>
    </div>
  );
};

export default WasteClass;
