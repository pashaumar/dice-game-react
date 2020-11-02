import React, { Component } from "react";
import styles from "./NewGame.module.css";
const NewGame = (props) => {
  return (
    <div className={styles.newGameContainer} onClick={() => props.newGame()}>
      <i className={`fas fa-plus-circle`}></i>
      <h1 className={styles.newGameHeading}>New Game</h1>
    </div>
  );
};
export default NewGame;
