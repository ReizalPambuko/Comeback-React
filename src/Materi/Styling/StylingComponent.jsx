import React, { Component } from "react";
import Reusable from "./Reusable/Reusable";

export default class StylingComponent extends Component {
  render() {
    return (
      <div>
        <Reusable name="Reizal" />
        <Reusable name="Ana" />
        <Reusable name="Okotssu" />
      </div>
    );
  }
}
