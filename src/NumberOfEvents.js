import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    errorText: "",
  };
  handleChange = (event) => {
    const value = event.target.value;
    if (value <= -1) {
      this.setState({
        errorText: "Input must be greater than 0",
      });
    } else if (value > 32) {
      this.setState({
        errorText: "Input must be less than 32",
      });
    } else {
      this.setState({
        numberOfEvents: value,
        errorText: "",
      });
      this.props.updateEvents(null, value);
    }
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
        <ErrorAlert text={this.state.errorText} />
      </div>
    );
  }
}

export default NumberOfEvents;
