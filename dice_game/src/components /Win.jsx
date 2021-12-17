import React from "react";

class Win extends React.Component {
  winnerSetup = () => {
    if (this.props.total2 >= 10 || this.props.total1) {
      this.props.func();
    }
  };
  render() {
    this.winnerSetup();
    return (
      <div>
        {this.props.total1 > 10 ? "yes" : ""}
        {this.props.total2 > 10 ? "yes" : ""}
      </div>
    );
  }
}
export default Win;
