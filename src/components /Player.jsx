import React from "react";
import "./Main.css";

class Player extends React.Component {
  render() {
    return (
      <div>
        <div className="player">
          <div>Player {this.props.playerNo}</div>

          <div>{this.props.total}</div>
        </div>
        <div className="current">
          <div>current </div>
          <div>{this.props.sum}</div>
        </div>
      </div>
    );
  }
}

export default Player;
