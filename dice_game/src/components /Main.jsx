import React from "react";
import Player from "./Player";
import Dice from "./Dice";
import Roll from "./Roll";

class Main extends React.Component {
  state = { dieOne: "", dieTwo: "" };

  updatedDieState = (die1, die2) => {
    this.setState({ dieOne: die1 });
    this.setState({ dieTwo: die2 });
  };
  //   rollValues = (die1, die2) => {
  //     this.setState({ dieOne: die1 });
  //     this.setState({ dieTwo: die2 });
  //   };

  render() {
    console.log(`======================================`);
    console.log(this.state.dieOne, this.state.dieTwo);
    return (
      <div>
        <Player player={this.state.dieOne} />
        <Roll func={this.updatedDieState} />

        <Player player={this.state.dieTwo} />
      </div>
    );
  }
}

export default Main;
