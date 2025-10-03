"use client";
import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className="customContainer">
        <nav className={styles.nav}>
          
          <div className={styles.logo}>
            <Link href="/">
              Cricket<span>{" "}Visualizer</span>
            </Link>
          </div>

          <ul className={styles.menu}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/matches">Matches</Link>
            </li>
            <li>
              <Link href="/teams">Teams</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
