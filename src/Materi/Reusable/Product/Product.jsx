import React, { Component } from "react";
import Counter from "../Counter/Counter";

export default class Product extends Component {
  state = {
    value: 0,
  };

  image =
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60";

  handleValue = (data) => {
    this.props.receiverValue(data);
  };
  render() {
    return (
      <div className="p-5">
        <img src={this.image} alt="" />
        <p>Rp 500.000</p>
        <Counter receiveValue={this.handleValue} />
      </div>
    );
  }
}
