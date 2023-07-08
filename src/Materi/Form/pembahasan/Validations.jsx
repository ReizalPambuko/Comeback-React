import React, { Component } from "react";
import * as Validator from "validatorjs";

const Input = ({ label, type, name, onChange }) => {
  return (
    <div>
      <label>{label} :</label>
      <br />
      <input
        type={type}
        name={name}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

const ShowError = ({ errors }) => {
  return (
    <ul>
      {errors.map((data, i) => (
        <li className="text-danger" key={i}>
          {data}
        </li>
      ))}
    </ul>
  );
};

export default class Validations extends Component {
  state = {
    email: "",
    password: "",
    errors: [],
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    let data = {
      email,
      password,
    };

    let rules = {
      email: "required|email",
      password: "required|min:8",
    };

    let validation = new Validator(data, rules);
    validation.passes();
    this.setState({
      errors: [
        ...validation.errors.get("email"),
        ...validation.errors.get("password"),
      ],
    });
    // let message = [];
    // if (email.length === 0) {
    //   message = [...message, "Email tidak boleh kosong"];
    // }

    // if (password.length === 0) {
    //   message = [...message, "Password tidak boleh kosong"];
    // }

    // const re =
    //   /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    // if (!re.test(String(email).toLowerCase())) {
    //   message = [...message, "Email tidak valid"];
    // } else {
    //   message = [];
    // }

    // if (password.length < 8) {
    //   message = [...message, "Password harus lebih dari 8"];
    // } else {
    //   message = [];
    // }

    // if (message.length > 0) {
    //   this.setState({
    //     errors: message,
    //   });
    // } else {
    //   alert(`
    //     Email : ${this.state.email}
    //     Password : ${this.state.password}
    //     `);
    //   {
    //     this.setState({
    //       errors: [],
    //     });
    //   }
    // }
  };
  render() {
    return (
      <div style={{ margin: "2rem" }}>
        {this.state.errors && <ShowError errors={this.state.errors} />}
        <h3>Login Page</h3>
        <form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            label="Email"
            name="email"
            onChange={(e) => this.setState({ email: e })}
          />
          <Input
            type="password"
            label="Password"
            name="password"
            onChange={(e) => this.setState({ password: e })}
          />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
