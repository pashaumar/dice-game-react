import React, { Component } from "react";
import styles from "./Player.module.css";
const Player = (props) => {
  const playerName = props.player.score >= 100 ? "Winner" : props.player.name;
  const background =
    props.activePlayer === props.player.id ? "#ebebe0" : "#fff";
  const styleBackground = {
    backgroundColor: background,
  };
  const styleActivePlayer =
    props.activePlayer === props.player.id ? "block" : "none";
  const styleDisplay = {
    display: styleActivePlayer,
  };
  return (
    <div className={styles.playerContainer} style={styleBackground}>
      <div className={styles.playerHeading}>
        <h1 className={styles.playerName}>{playerName}</h1>
        <div className={styles.activePlayer} style={styleDisplay}></div>
      </div>
      <h1 className={styles.playerScore}>{props.player.score}</h1>
      <div className={styles.currentContainer}>
        <h1 className={styles.currentHeading}>Current</h1>
        <h1 className={styles.currentValue}>{props.player.current}</h1>
      </div>
    </div>
  );
};
export default Player;
