import React from "react";

class Win extends React.Component {
  componentDidUpdate() {
    if (
      (this.props.total2 >= this.props.winningValue &&
        typeof this.props.total2 === "number") ||
      (this.props.total1 >= this.props.winningValue &&
        typeof this.props.total1 === "number")
    ) {
      let winningScore = this.props.total1;
      this.props.func();
      return winningScore;
    }
  }
  render() {
    return (
      <div>{this.props.winnerTest !== 1 ? `${this.winningScore}` : ""}</div>
    );
  }
}
export default Win;
