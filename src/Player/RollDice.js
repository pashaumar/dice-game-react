import React, { Component } from "react";
import styles from "./RollDice.module.css";
const RollDice = (props) => {
  let pointerEventsNone;
  if (props.playerOneScore >= 100 || props.playerTwoScore >= 100) {
    pointerEventsNone = "none";
  } else {
    pointerEventsNone = "auto";
  }
  const style = {
    pointerEvents: pointerEventsNone,
  };
  console.log(pointerEventsNone);
  return (
    <div
      className={styles.rollDiceContainer}
      onClick={() => props.rollDice()}
      style={style}
    >
      <i className={`fas fa-circle-notch`}></i>
      <h1 className={styles.rollDiceHeading}>Roll Dice</h1>
    </div>
  );
};

export default RollDice;
