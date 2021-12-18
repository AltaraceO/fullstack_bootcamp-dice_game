import React from "react";
import "./Roll.css";

class Roll extends React.Component {
  state = { die1: "", die2: "", prevDie1: "", prevDie2: "" };

  randomRoll = () => {
    return Math.floor(Math.random() * 6 + 1);
  };

  updateState = () => {
    this.setState({ prevDie1: this.state.die1 });
    this.setState({ prevDie2: this.state.die2 });
    this.setState({ die1: this.randomRoll() });
    this.setState({ die2: this.randomRoll() });
    if (this.state.die1 === 6 && this.state.die2 === 6) {
      console.log("66");
    }
    this.props.func(this.state.die1, this.state.die2);
  };

  onButtonClick = () => {
    this.updateState();
  };

  render() {
    return (
      <div className="game-center">
        <img
          className="die"
          src={`./dice-images/dice-${this.state.prevDie1}.png`}
          alt=""
        />
        <img
          className="die"
          src={`./dice-images/dice-${this.state.prevDie2}.png`}
          alt=""
        />
        <button onClick={this.onButtonClick}>Roll</button>
      </div>
    );
  }
}
export default Roll;
