import React from "react";
import "./Main.css";

class Restart extends React.Component {
  render() {
    return (
      <div>
        <button className="button" onClick={() => this.props.func()}>
          Restart
        </button>
      </div>
    );
  }
}
export default Restart;
