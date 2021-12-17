import React from "react";

class Player extends React.Component {
  state = { value: "", sum: "" };

  render() {
    // console.log(this.state.sum);
    return (
      <div>
        <div>
          <div>Player {this.props.playerNo}</div>

          <div>{this.props.total}</div>
        </div>
        <div>
          <div>current </div>
          <div>{this.props.sum}</div>
        </div>
      </div>
    );
  }
}

export default Player;
