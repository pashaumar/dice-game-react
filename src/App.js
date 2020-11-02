import React, { Component } from "react";
import "./App.css";
import NewGame from "./Player/NewGame";
import Dice from "./Player/Dice";
import RollDice from "./Player/RollDice";
import Player from "./Player/Player";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePlayer: 1,
      player1: {
        id: 1,
        score: 0,
        current: 0,
        name: "Player1",
      },
      player2: {
        id: 2,
        score: 0,
        current: 0,
        name: "Player2",
      },
      random: 0,
    };
  }
  rollDice = () => {
    const random = Math.ceil(Math.random() * 6);
    if (this.state.activePlayer === 1) {
      if (this.state.random === 1) {
        this.setState((prevState) => {
          return {
            ...prevState,
            activePlayer: 2,
            player2: {
              ...prevState.player2,
              score: prevState.player2.score + random,
              current: random,
            },
            random: random,
          };
        });
      } else {
        this.setState((prevState) => {
          return {
            ...prevState,
            player1: {
              ...prevState.player1,
              score: prevState.player1.score + random,
              current: random,
            },
            random: random,
          };
        });
      }
    } else if (this.state.activePlayer === 2) {
      if (this.state.random === 1) {
        this.setState((prevState) => {
          return {
            ...prevState,
            activePlayer: 1,
            player1: {
              ...prevState.player1,
              score: prevState.player1.score + random,
              current: random,
            },
            random: random,
          };
        });
      } else {
        this.setState((prevState) => {
          return {
            ...prevState,
            player2: {
              ...prevState.player2,
              score: prevState.player2.score + random,
              current: random,
            },
            random: random,
          };
        });
      }
    }
  };
  newGame = () => {
    this.setState((prevState) => {
      return {
        activePlayer: 1,
        player1: {
          id: 1,
          score: 0,
          current: 0,
          name: "Player1",
        },
        player2: {
          id: 2,
          score: 0,
          current: 0,
          name: "Player2",
        },
        random: 0,
      };
    });
  };
  render() {
    return (
      <div className="container">
        <NewGame newGame={this.newGame} />
        <Dice random={this.state.random} />
        <RollDice
          rollDice={this.rollDice}
          playerOneScore={this.state.player1.score}
          playerTwoScore={this.state.player2.score}
        />
        <Player
          player={this.state.player1}
          activePlayer={this.state.activePlayer}
          random={this.state.random}
        />
        <Player
          player={this.state.player2}
          activePlayer={this.state.activePlayer}
          random={this.state.random}
        />
      </div>
    );
  }
}

export default App;
