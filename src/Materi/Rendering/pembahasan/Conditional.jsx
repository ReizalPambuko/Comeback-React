import React, { Component } from "react";

export default class Conditional extends Component {
  state = {
    loading: true,
  };
  render() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 3000);
    // const isLogin = true;
    // let message = "";
    // if (isLogin) {
    //   message = <h1>Anda sudah login</h1>;
    // } else {
    //   message = <h1>Silahkan login terlebih dahulu</h1>;
    // }
    return (
      <div>
        <h1>
          {this.state.loading ? <h1>Loading...</h1> : <h1>Selamat datang</h1>}
        </h1>
      </div>
    );
  }
}
