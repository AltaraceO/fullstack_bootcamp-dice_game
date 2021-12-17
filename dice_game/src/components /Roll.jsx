import React from "react";

class Roll extends React.Component {
  state = { die: "" };

  randomRoll = () => {
    return Math.floor(Math.random() * 6 + 1);
  };

  updateState = () => {
    this.setState({ die: this.randomRoll() });
  };
  componentDidMount() {
    this.updateState();
  }

  componentDidUpdate() {
    console.log(this.state.die);
  }

  render() {
    console.log(this.state.die);
    return (
      <div>
        <img src={`./dice-images/dice-${this.state.die}.png`} alt="" />
      </div>
    );
  }
}
export default Roll;
