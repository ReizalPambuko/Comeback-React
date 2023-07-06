import React, { Component } from "react";
import ClassComponent from "./ClassComponent";
import FunctionalComponent from "./FunctionalComponent";

export default class Komponent extends Component {
  render() {
    return (
      <div>
        <ClassComponent nama="Reizal" />
        <FunctionalComponent nama="Kira" />
      </div>
    );
  }
}
