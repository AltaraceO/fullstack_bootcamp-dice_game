import React from "react";
import Player from "./Player";
import Dice from "./Dice";
import Roll from "./Roll";
import Hold from "./Hold";

class Main extends React.Component {
  state = {
    currPlayer: 0,
    dieOne: "",
    dieTwo: "",
    sum1: "a",
    current1: "",
    sum2: "b",
    current2: "",
  };

  changePlayer = () => {
    if (this.state.currPlayer === 0) {
      this.setState({ currPlayer: 1 });
    } else {
      this.setState({ currPlayer: 0 });
    }
  };

  updatedDieState = (die1, die2) => {
    if (this.state.currPlayer === 0) {
      this.setState({ sum1: die1 + die2 });
    } else {
      this.setState({ sum2: die1 + die2 });
    }
  };

  render() {
    console.log(`======================================`);
    console.log(this.state.sum1);
    console.log(this.state.currPlayer);
    return (
      <div>
        <Player
          playerNo={1}
          dieOne={this.state.dieOne}
          dieTwo={this.state.dieTwo}
        />
        {this.state.sum1}
        <Roll func={this.updatedDieState} />
        <Hold func={this.changePlayer} />

        <Player
          playerNo={2}
          dieOne={this.state.dieOne}
          dieTwo={this.state.dieTwo}
        />
        {this.state.sum2}
      </div>
    );
  }
}

export default Main;
