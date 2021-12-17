import React from "react";

class Win extends React.Component {
  componentDidUpdate() {
    if (
      this.props.total2 >= this.props.winningValue ||
      this.props.total1 >= this.props.winningValue
    ) {
      this.props.func();
    }
  }
  render() {
    return <div>{this.props.winnerTest !== 1 ? "yes" : ""}</div>;
  }
}
export default Win;
