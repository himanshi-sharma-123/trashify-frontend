import React from "react";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div name="dashboard" className={styles.dashboard}>
      <div className={styles.heading}>
        <h1>Dashboard</h1>
        <div className={styles.text_bg}>
          <p>
            <span>Facts and Figures</span>
          </p>
        </div>
      </div>{" "}
    </div>
  );
};

export default Dashboard;
