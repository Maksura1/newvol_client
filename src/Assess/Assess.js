import React, { Component } from "react";
import Quiz from "./Quiz";
import "./Home.css";
import Logo from "./log.png";
import Modal from "./Modal";

class Assess extends Component {
  // Data

  // Functions

  // Render
  render() {
    return (
      <div>
        <div id="header">
          //{" "}
          <div id="logo">
            // <img src={Logo} alt="logo" />
            //{" "}
          </div>
        </div>

        <div id="buttons">
          <a href="/"> Home </a>
          <a href="/Flashcards"> Study </a>
        </div>

        <div id="wrap">
          <Modal />
          <Quiz />
        </div>
      </div>
    );
  }
}

export default Assess;
