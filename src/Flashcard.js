import React, { Component } from "react";
import "./Flashcard.css";
import Logo from "./log.png";
import Bar from "./Bar";

class Flashcard extends Component {
  // Data
  state = {};
  // Functions

  // Functions
  // Render
  render() {
    return (
      <div>
        <div id="header">
          <div id="logo">
            <img src={Logo} alt="logo" />
          </div>
        </div>

        <div id="wrap">
          <Bar />
          <div className="container">RENDER FLASHCARD HERE</div>;
        </div>
      </div>
    );
  }
}

export default Flashcard;
