"use client";
import styles from "./MatchCard.module.css";

export default function MatchCard({ match }) {
  return (
    <div className="customContainer">
      <div className={styles.card}>
        <h3 className={styles.teams}>
          {match.teams[0]} <span className={styles.vs}>vs</span>{" "}
          {match.teams[1]}
        </h3>
        <p className={styles.venue}>{match.venue}</p>
        <p className={styles.date}>{match.date}</p>
        <p className={styles.status}>{match.status}</p>
        {match.score && match.score.length > 0 && (
          <div className={styles.scores}>
            {match.score.map((inning, index) => (
              <p key={index} className={styles.inning}>
                <strong>{inning.inning}</strong>: {inning.r}/{inning.w} (
                {inning.o} ov)
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
