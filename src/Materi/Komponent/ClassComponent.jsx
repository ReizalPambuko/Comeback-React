import React, { Component } from "react";

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };
  }

  handlePlus = () => {
    this.setState({ value: this.state.value + 1 });
  };

  handleMinus = () => {
    if (this.state.value > 0) {
      this.setState({ value: this.state.value - 1 });
    }
  };

  render() {
    return (
      <div>
        <h1>Hello {this.props.nama}</h1>
        <h2>Class component</h2>
        <button onClick={this.handleMinus}>-</button>
        <span> {this.state.value} </span>
        <button onClick={this.handlePlus}>+</button>
      </div>
    );
  }
}
