import React, { Component } from "react";

class count extends Component {
  state = {
    hitung: 0,
  };

  cekCount = () => {
    if (this.state.hitung === 0) {
    }
  };

  render() {
    return this.state.hitung;
  }
}

export default count;
