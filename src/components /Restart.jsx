import React from "react";

class Restart extends React.Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.func()}>Restart</button>
      </div>
    );
  }
}
export default Restart;
