"use client";
import { useEffect, useState } from "react";
import MatchCard from "../MatchCard/MatchCard";
import styles from "./LiveMatches.module.css";

export default function LiveMatches() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    async function getMatches() {
      try {
        const res = await fetch(
          "https://api.cricapi.com/v1/currentMatches?apikey=8c588024-54de-489d-8d17-0ba9b474f339&offset=0"
        );
        const data = await res.json();
        if (data && data.data) {
          setMatches(data.data);
        }
      } catch (err) {
        console.error("Error fetching matches:", err);
      }
    }

    getMatches();
    const interval = setInterval(getMatches, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.liveMatches}>
      <h1 className={styles.heading}>Live Matches</h1>
      {matches.length === 0 ? (
        <p>No live matches found</p>
      ) : (
        <div className={styles.grid}>
          {matches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      )}
    </section>
  );
}
