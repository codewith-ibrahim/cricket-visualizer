"use client";
import React from "react";
import Link from "next/link";
import styles from "./HeroSection.module.css";
import Button from "../ui/Button/Button";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>{" "}
      <div className="customContainer">
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <h1 className={styles.title}>
              Stay Updated with <span>Live Cricket</span> Scores
            </h1>
            <p className={styles.description}>
              Get real-time updates, match stats, and play-by-play commentary
              with our interactive visualizer.
            </p>
            <Button />
          </div>
        </div>
      </div>
    </section>
  );
}
