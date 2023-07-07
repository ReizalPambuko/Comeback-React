import React, { Component } from "react";
import Bar from "./Bar/Bar";
import Product from "./Product/Product";

export default class Reusable extends Component {
  state = {
    value: 0,
  };

  handleValue = (data) => {
    this.setState({ value: data });
  };
  render() {
    return (
      <div>
        <Bar value={this.state.value} />
        <Product receiverValue={this.handleValue} />
      </div>
    );
  }
}
