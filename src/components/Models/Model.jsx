import React, { useState, useEffect } from "react";
import styles from "./Model.module.css";

const Model = () => {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch("/members")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);
  return (
    <div name="models">
      <h1>Model</h1>
      {typeof data.members === "undefined" ? (
        <p>Loading...</p>
      ) : (
        data.members.map((member, i) => <p key={i}>{member}</p>)
      )}
      {/* <button className={styles.button}>Click here</button> */}
    </div>
  );
};

export default Model;
