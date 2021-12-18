import React from "react";
import "./Roll.css";

class Roll extends React.Component {
  state = { die1: "", die2: "", prevDie1: "", prevDie2: "" };

  randomRoll = () => {
    return Math.floor(Math.random() * 6 + 1);
  };

  updateState = () => {
    const newState = { die1: this.randomRoll(), die2: this.randomRoll() };

    // if (this.state.die1 === 6 && this.state.die2 === 6) {
    //   console.log("66");
    // }
    this.props.func(newState.die1, newState.die2);

    this.setState(newState);
  };

  onButtonClick = () => {
    this.updateState();
  };

  render() {
    return (
      <div className="game-center">
        <img
          className="die image"
          src={`./dice-images/dice-${this.state.die1}.png`}
          alt=""
        />
        <img
          className="die image"
          src={`./dice-images/dice-${this.state.die2}.png`}
          alt=""
        />
        <button className="button" onClick={this.onButtonClick}>
          Roll
        </button>
      </div>
    );
  }
}
export default Roll;
