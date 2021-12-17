import React from "react";
import Player from "./Player";
import Dice from "./Dice";
import Roll from "./Roll";

class Main extends React.Component {
  state = { dieOne: "", dieTwo: "" };

  value = (<Roll />);
  render() {
    console.log(this.value);
    return (
      <div>
        <Player player={"number"} />
        <Roll />
        <Roll />

        <Player player={"number"} />
      </div>
    );
  }
}

export default Main;
