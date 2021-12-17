import React from "react";

class Hold extends React.Component {
  change = () => {
    this.props.func();
  };
  render() {
    return (
      <div>
        <button onClick={this.change}>hold</button>
      </div>
    );
  }
}
export default Hold;
