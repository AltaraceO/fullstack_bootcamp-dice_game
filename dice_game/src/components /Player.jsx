import React from "react";

class Player extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <div>
          <div>Player {this.props.player}</div>
          <div>0</div>
        </div>
        <div>
          <div>current </div>
          <div>0</div>
        </div>
      </div>
    );
  }
}

export default Player;
