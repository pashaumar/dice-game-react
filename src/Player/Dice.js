import React, { Component } from "react";
import styles from "./Dice.module.css";
const Dice = ({ random }) => {
  const displayNone = random === 0 ? "none" : "block";
  const explicitRandom = random === 0 ? 1 : random;
  const style = {
    display: displayNone,
  };
  return (
    <div className={styles.dice} style={style}>
      <img src={require(`../assets/dice-${explicitRandom}.svg`)} />
    </div>
  );
};

export default Dice;
