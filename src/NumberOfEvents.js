import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  };
  handleChange = (event) => {
    const value = event.target.value;

    this.setState({
      numberOfEvents: value,
    });
    this.props.updateEvents(null, value);
  };
  render() {
    return (
      <div>
        <input
          value={this.state.numberOfEvents}
          onChange={this.handleChange}
          className="numberInput"
          type="number"
        />
      </div>
    );
  }
}

export default NumberOfEvents;
