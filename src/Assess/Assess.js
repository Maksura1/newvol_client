import React, { Component } from "react";
import Quiz from "./Quiz";
import "./Home.css";
import Logo from "./log.png";
import Side from "./Side";

class Assess extends Component {
  // Data

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

        <div id="buttons">
          <span className="mr-4">
            <button>
              <a href="/"> Home </a>
            </button>
          </span>
          <span className="mr-4">
            <button>
              <a href="/flashcards"> Flashcards </a>
            </button>
          </span>
        </div>

        <div id="wrap">
          <Side />
          <Quiz />
        </div>
      </div>
    );
  }
}

export default Assess;
