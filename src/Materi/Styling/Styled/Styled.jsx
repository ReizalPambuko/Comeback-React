import React, { Component } from "react";
import { styled } from "styled-components";

const Button = styled.button`
  padding: 14px 35px;
  border: 2px solid red;
  transition: 0.1s;
  background: transparent;
  margin: 20px;
  font-weight: bold;

  &:hover {
    background-color: red;
  }
`;

const Title = styled.h1`
  font-size: 20px;
  color: pink;
`;

export default class Styled extends Component {
  render() {
    return (
      <div>
        <Title>Hello World</Title>
        <Button>Click Me</Button>
      </div>
    );
  }
}
