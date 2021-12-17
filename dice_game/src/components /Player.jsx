import React from "react";

class Player extends React.Component {
  state = { value: "", sum: "" };

  otherfunc = () => {
    this.setState({ sum: this.props.player });
  };

  render() {
    console.log(this.state.sum);
    return (
      <div>
        <div>
          <div>Player {this.props.player}</div>
          {() => this.otherfunc()}
          <div></div>
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
