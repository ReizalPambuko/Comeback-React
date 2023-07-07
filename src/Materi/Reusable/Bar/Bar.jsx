import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export default class Bar extends Component {
  render() {
    return (
      <div>
        <Container>
          <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="#">{this.props.value}</Navbar.Brand>
            </Container>
          </Navbar>
        </Container>
      </div>
    );
  }
}
