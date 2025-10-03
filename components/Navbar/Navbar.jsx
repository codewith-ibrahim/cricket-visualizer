import React from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className="customContainer">
        <h1 className="text-black">Cricket Visualizer</h1>
      </div>
      <div></div>
    </header>
  );
}
