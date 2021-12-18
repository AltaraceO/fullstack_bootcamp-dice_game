import React from "react";
import "./Main.css";

class Hold extends React.Component {
  change = () => {
    this.props.func();
  };
  render() {
    return (
      <div>
        <button className="button" onClick={this.change}>
          hold
        </button>
      </div>
    );
  }
}
export default Hold;
