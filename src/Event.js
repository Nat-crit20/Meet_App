import React, { Component } from "react";

class Event extends Component {
  state = {
    collapse: true,
  };
  handleButtonClicked = () => {
    this.setState({
      collapse: !this.state.collapse,
    });
  };
  render() {
    const { event } = this.props;
    const d = new Date(event.start.dateTime);
    return (
      <div>
        <h1 className="summary">{event.summary}</h1>
        <p className="startTime">{d.toUTCString()}</p>
        {!this.state.collapse ? (
          <div className="details">
            About Event:
            <p>{event.description}</p>
          </div>
        ) : (
          <div></div>
        )}
        <button
          className="showDetails"
          onClick={() => this.handleButtonClicked()}
        >
          {this.state.collapse ? "Show Details" : "Hide Details"}
        </button>
      </div>
    );
  }
}

export default Event;
