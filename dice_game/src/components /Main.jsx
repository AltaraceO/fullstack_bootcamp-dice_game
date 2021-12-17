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
    sum1: 0,
    total1: 0,
    sum2: 0,
    total2: 0,
  };

  changePlayer = () => {
    if (this.state.currPlayer === 0) {
      this.setState({ currPlayer: 1, sum1: 0 });
    } else {
      this.setState({ currPlayer: 0, sum2: 0 });
    }
  };

  updatedDieState = (die1, die2) => {
    const total1 = this.state.total1;
    const total2 = this.state.total2;
    const sum1 = Number(this.state.sum1);
    const sum2 = Number(this.state.sum2);

    if (this.state.currPlayer === 0) {
      this.setState({ sum1: die1 + die2 });
      this.setState({ total1: total1 + sum1 });
    } else {
      this.setState({ sum2: die1 + die2 });
      this.setState({ total2: total2 + sum2 });
    }
  };

  render() {
    console.log(`======================================`);
    console.log(this.state.sum1);
    console.log(this.state.total1);
    console.log(this.state.currPlayer);
    return (
      <div>
        <Player playerNo={1} sum={this.state.sum1} total={this.state.total1} />

        <Roll func={this.updatedDieState} />
        <Hold func={this.changePlayer} />

        <Player playerNo={2} sum={this.state.sum2} total={this.state.total2} />
      </div>
    );
  }
}

export default Main;
