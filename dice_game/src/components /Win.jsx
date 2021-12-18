import React from "react";

class Win extends React.Component {
  componentDidUpdate() {
    if (
      (this.props.total2 >= this.props.winningValue &&
        typeof this.props.total2 === "number") ||
      (this.props.total1 >= this.props.winningValue &&
        typeof this.props.total1 === "number")
    ) {
      this.props.func();
    }
  }
  render() {
    return <div>{this.props.winnerTest !== "visible" ? `win` : ""}</div>;
  }
}
export default Win;
