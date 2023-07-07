import React, { Component } from "react";

export default class Variable extends Component {
  state = {
    a: null,
    b: true,
    c: "",
    d: 0,
  };
  render() {
    return (
      <div>
        <h1>a: {this.state.a}</h1>
        <h1>b: {this.state.b}</h1>
        <h1>c: {this.state.c}</h1>
        <h1>d: {this.state.d}</h1>
        <h1>e: {this.props.e}</h1>
      </div>
    );
  }
}
