import React, { Component } from "react";
import ClassComponent from "./pembahasan/ClassComponent";
import FunctionalComponent from "./pembahasan/FunctionalComponent";

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
