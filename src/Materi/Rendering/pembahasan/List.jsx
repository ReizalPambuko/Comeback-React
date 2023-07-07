import React, { Component } from "react";

export default class List extends Component {
  state = {
    name: ["Rei", "Zal", "Specter", "Anata"],
  };
  render() {
    return (
      <div>
        <ul>
          {this.state.name.map((value, i) => (
            <li key={i}>{value}</li>
          ))}
        </ul>
      </div>
    );
  }
}
