import React from "react";

class Dice extends React.Component {
  state = { dieOne: "", dieTwo: "" };

  render() {
    return (
      <div>
        <img src={`./dice-images/dice-${this.props.number}.png`} alt="" />
      </div>
    );
  }
}
export default Dice;
