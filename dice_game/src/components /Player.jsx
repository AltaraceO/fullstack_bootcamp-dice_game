import React from "react";

class Player extends React.Component {
  render() {
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
