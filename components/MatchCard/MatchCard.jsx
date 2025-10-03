"use client";
import React from "react";
import styles from "./MatchCard.module.css";

export default function MatchCard({ match }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.teams}>
        {match.team1} <span className={styles.vs}>vs</span> {match.team2}
      </h3>
      <p className={styles.score}>{match.score}</p>
      <span
        className={`${styles.status} ${
          match.status === "Live"
            ? styles.live
            : match.status === "Upcoming"
            ? styles.upcoming
            : styles.finished
        }`}
      >
        {match.status}
      </span>
    </div>
  );
}
