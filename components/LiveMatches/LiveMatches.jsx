"use client";
import React from "react";
import styles from "./LiveMatches.module.css";
import MatchCard from "../MatchCard/MatchCard";

export default function LiveMatches() {
  // Dummy matches data (baad mein API se aayega)
  const matches = [
    {
      id: 1,
      team1: "Pakistan",
      team2: "India",
      score: "120/3 (15.2)",
      status: "Live",
    },
    {
      id: 2,
      team1: "Australia",
      team2: "England",
      score: "250/8 (50.0)",
      status: "Finished",
    },
    {
      id: 3,
      team1: "South Africa",
      team2: "New Zealand",
      score: "Yet to start",
      status: "Upcoming",
    },
    {
      id: 4,
      team1: "South Africa",
      team2: "New Zealand",
      score: "Yet to start",
      status: "Upcoming",
    },
    {
      id: 5,
      team1: "South Africa",
      team2: "New Zealand",
      score: "Yet to start",
      status: "Upcoming",
    },
    {
      id: 6,
      team1: "South Africa",
      team2: "New Zealand",
      score: "Yet to start",
      status: "Upcoming",
    },
    {
      id: 7,
      team1: "South Africa",
      team2: "New Zealand",
      score: "Yet to start",
      status: "Upcoming",
    },
    {
      id: 8,
      team1: "South Africa",
      team2: "New Zealand",
      score: "Yet to start",
      status: "Upcoming",
    },
  ];

  return (
    <section className={styles.liveMatches}>
      <div className="customContainer">
        <h2 className={styles.heading}>🏏 Live & Upcoming Matches</h2>
        <div className={styles.grid}>
          {matches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </div>
    </section>
  );
}
