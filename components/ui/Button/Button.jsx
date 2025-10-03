import Link from "next/link";
import React from "react";
import styles from "./Button.module.css";

const Button = () => {
  return (
    <div className={styles.actions}>
      <Link href="/matches" className={styles.primaryBtn}>
        Explore Matches
      </Link>
      <Link href="/about" className={styles.secondaryBtn}>
        Learn More
      </Link>
    </div>
  );
};

export default Button;
