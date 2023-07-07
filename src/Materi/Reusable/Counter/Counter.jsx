import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    value: 0,
  };

  handleMinus = () => {
    this.setState({ value: this.state.value - 1 }, () =>
      this.props.receiveValue(this.state.value)
    );
  };

  handlePlus = () => {
    this.setState({ value: this.state.value + 1 }, () =>
      this.props.receiveValue(this.state.value)
    );
  };

  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.handleMinus}>
          -
        </button>
        <span> {this.state.value} </span>
        <button className="btn btn-primary" onClick={this.handlePlus}>
          +
        </button>
      </div>
    );
  }
}
