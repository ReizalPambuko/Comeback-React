import React, { Component } from "react";

export default class FormElement extends Component {
  state = {
    nama: "",
    jurusan: "",
    gender: "",
    alamat: "",
    member: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert(`
        nama: ${this.state.nama}
        jurusan: ${this.state.jurusan}
        gender: ${this.state.gender}
        alamat: ${this.state.alamat}
        member: ${this.state.member}
    `);
    this.setState({
      nama: "",
      jurusan: "",
      gender: "",
      alamat: "",
      member: false,
    });
  };
  render() {
    return (
      <form style={{ padding: "5rem" }} onSubmit={this.handleSubmit}>
        <label>Nama:</label>
        <br />
        <input
          type="text"
          name="nama"
          defaultValue={this.props.nama}
          onChange={(e) => this.setState({ nama: e.target.value })}
        />
        <br />
        <label>Jurusan:</label>
        <br />
        <select
          name="jurusan"
          onChange={(e) => this.setState({ jurusan: e.target.value })}
        >
          <option>Masukkan jurusan</option>
          <option value="Teknik Informatika">Teknik Informatika</option>
          <option value="TKJ">TKJ</option>
        </select>
        <br />
        <label>Jenis Kelamin:</label>
        <br />
        <label>Laki-laki</label>
        <input
          type="radio"
          name="gender"
          value="Laki-laki"
          onChange={(e) => this.setState({ gender: e.target.value })}
        />
        <br />
        <label>Perempuan</label>
        <input
          type="radio"
          name="gender"
          value="Perempuan"
          onChange={(e) => this.setState({ gender: e.target.value })}
        />
        <br />
        <label htmlFor="">Alamat:</label>
        <br />
        <textarea
          onChange={(e) => this.setState({ alamat: e.target.value })}
          name="alamat"
          id=""
          cols="30"
          rows="4"
          value={this.state.alamat}
        ></textarea>
        <br />
        <label>Member:</label>
        <br />
        <input
          type="checkbox"
          name="member"
          id=""
          checked={this.state.member}
          onChange={(e) => this.setState({ member: e.target.checked })}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
