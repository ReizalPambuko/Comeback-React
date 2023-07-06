import React, { Component } from "react";
import "./style.scss";
import Title from "./Title";

export default class ScssComponent extends Component {
  render() {
    return (
      <div>
        <button className="btn-danger">Add Class</button>
        <Title />
      </div>
    );
  }
}
