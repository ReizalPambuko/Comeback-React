import React, { Component } from "react";
import "./style.css";

export default class PlainComponent extends Component {
  render() {
    return (
      <div>
        <button className="btn-danger">Add Class</button>
      </div>
    );
  }
}
