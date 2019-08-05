import React, { Component } from "react";
import "./Container.css";

class Container extends Component {
  // Data
  state = {
    words: this.props.words
  };

  // Functions

  // Render
  render() {
    return <h1> This is where all the flash cards go </h1>;
  }
}

export default Container;
