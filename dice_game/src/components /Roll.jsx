import React from "react";

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
    this.props.func(this.state.die1, this.state.die2);
  };

  onButtonClick = () => {
    this.updateState();
  };

  //   componentDidUpdate = () => {
  //     console.log(this.state.prevDie1, this.state.prevDie2);
  //     if (
  //       this.state.die1 !== this.state.die2 &&
  //       this.state.die2 !== this.state.prevDie2
  //     ) {
  //       console.log("yes");
  //       this.props.func(this.state.die1, this.state.die2);
  //     }
  //   };

  render() {
    console.log(this.state.die1, this.state.die2);
    console.log("++++++++++++++++++++++++++");
    return (
      <div>
        <img src={`./dice-images/dice-${this.state.prevDie1}.png`} alt="" />
        <img src={`./dice-images/dice-${this.state.prevDie2}.png`} alt="" />
        <button onClick={this.onButtonClick}>click here to test</button>
      </div>
    );
  }
}
export default Roll;
