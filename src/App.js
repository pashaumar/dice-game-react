import React, {Component} from "react";
import ReactDOM from "react-dom"
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      activePlayer: 'playerOne',
      playerOneScore: 0,
      playerTwoScore: 0,
      currentOneScore: 0,
      currentTwoScore: 0,
      diceRandom: 1
    }
  }
  rollDice = () =>{
    const random = Math.ceil(Math.random()*6);
    if(random === 1){
      this.setState(prevState =>{
        if(prevState.activePlayer === 'playerOne'){
          return {
            ...prevState,
            activePlayer: 'playerTwo'
          }
        }
        else{
          return{
            ...prevState,
            activePlayer: 'playerOne'
          }
        }
      })
    }
    this.setState(prevState =>{
      if(prevState.activePlayer === 'playerOne'){
        return{
          ...prevState,
          playerOneScore: prevState.playerOneScore + random,
          currentOneScore: random,
          diceRandom: random
        }
      }
      else {
        return{
          ...prevState,
          playerTwoScore: prevState.playerTwoScore + random,
          currentTwoScore: random,
          diceRandom: random
        }
      }
    })
    
  }

  render() {
    return (
      <div className="container">
        {/* player -1 */}
        <div className="player-1-container">
          <div className="new-game">
          <i className="fas fa-plus-circle"></i>
          <h1>New Game</h1>
          </div>
          <div className="roll-dice" onClick={this.rollDice}>
            <i className="fas fa-circle-notch"></i>
            <h1>Roll Dice</h1>
          </div>
          <div className="player-1-heading">
            <h1 className="player-1-name">Player1</h1>
            <div className="circle-1"></div>
          </div>
          <h1 className="player-1-score">{this.state.playerOneScore}</h1>
          <div className="current-player-1">
            <h1>Current</h1>
            <h1 className="current-score-1">{this.state.currentOneScore}</h1>
          </div>
          <div className="dice">
            <img src={require(`./assets/dice-${this.state.diceRandom}.svg`)}/>
          </div>
        </div>
        {/* player 2 */}
        <div className="player-2-container">
          <div className="player-2-heading">
            <h1 className="player-2-name">Player1</h1>
            <div className="circle-2"></div>
          </div>
          <h1 className="player-2-score">{this.state.playerTwoScore}</h1>
          <div className="current-player-2">
            <h1>Current</h1>
            <h1 className="current-score-2">{this.state.currentTwoScore}</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default App

